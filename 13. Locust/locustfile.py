from locust import HttpUser, task, between

class QuickstartUser(HttpUser):
    wait_time = between(1, 2)
    host = "https://amigurumi-lisi.herokuapp.com"

    # def on_start(self):
    #     self.client.post("/login", json={"username":"foo", "password":"bar"})

    @task
    def hello_world(self):
        self.client.get("/bambole/")
        self.client.get("/animali/")

    @task(3)
    def view_item(self):
        for item_id in range(10):
            self.client.get(f"/post/{5}")