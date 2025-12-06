import yaml
import docker
import io
from flask import Flask, render_template, request

app = Flask(__name__, template_folder="pages")
client = docker.from_env()

@app.route("/", methods=["POST", "GET"])
def createContainer():
    if request.method == "POST":
      name = request.form.get("cname")
      image = request.form.get("cimage")
      ports = request.form.get("cports")
      #volumes = request.form.get("cvolumes")
      #envVars = request.form.get("cenvironments")

      try:
        client.images.get_registry_data(image)
        client.images.pull(image)
      except Exception as error:
        print(str(error))      
      
      data = {"version" : '3.8', 
              "services" : {
                "webapp" : {
                  "container_name" : name,
                  "image" : image,
                  "ports" : [ports],
                  "volumes" : [".:/App"],
                  "environment" : ["DEBUG=true"],
                  "restart": "unless-stopped"
                  }
                }
              }

      try:
        with io.open("compose.yaml", "w", encoding="utf8") as output:
          yaml.dump(data, output, sort_keys=False, default_flow_style=False, allow_unicode=True)
      except Exception as error:
        print(error)

      try:
        with io.open("compose.yaml", "r") as stream:
          data_loaded = yaml.safe_load(stream)
      except Exception as error:
        print(error)

    return render_template("containerGenerator.html")


if __name__ == "__main__":
  app.run()
