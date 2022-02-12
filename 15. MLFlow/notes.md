# ML Flow
## Introduction
The traditional software development vs a machine learning development are different, the paradigm is different. for many reasons:

- The metrics is what you want to optimize, you constantly experiment to improve it (vs meet a functional specification)

- The quality depends on input data and tuning parameters ( vs depend only on code).

looking at the machine learning lifecycle we can use different tools for instance for data preparation we can use spark, python or whatever, for training as well we can use very different tools like tf or torch, as well when deploying (docker, kubernetes) nd lastly also for dealing with raw data.

the two main problems when CI/CD is the **tuning parameters** and the amount of **scale** to be done to having a good ML system. 

MLflow is designed following some principles:

1. **API-First**:
    * submit runs, log models. metrics
    * abstract "model" lambda function that MLflow can then deploy in many places (Docker, Azure ML and others)
    * Open interface allows easy integration from the community.

2. **Modular Design**:
    * allow different components individually (tracking/projects/models/registry)
    * Not monolithic

We have 4 different components of ML Flow:

1. Tracking: record and query experiments: code, data, config and results
2. Projects: package data science code in a format that enables reproducible runs on many platform
3. Models: deploy machine learning modes in diverse serving environment
4. Models Registry: store, annotate and manage models in a central repository

## ML FLow Tracking
Tracking is always be done in DevOps in machine learning we have several concepts to be tracked such as:

- Parameters 
- Metrics
- Tags and notes (information about the runs)
- Artifacts (files, data, models)
- Source (code that run)
- Version
- Run: an instance of code that runs by ML flow (collects all the previous important information)
- Experiment: multiples Runs

the main idea with ml flow we can keep track of parameters very easily such as:


```py
import mlflow

with mlflow.start_run():
    mlflow.log_param()
    mlflow.log_param("data_file", data_file)
    mlflow.log_param("lr", lr)
    mlflow.log_metric("score", score)
    mlflow.sklearn.log_model(model)
```

then mlflow is able to create a very nice graphic interface to keep track of all your experiments. 

```bash
mlflow ui
```

we have producers such as notebooks or R or java that produce information, then we have a tracking server and lastly we have the final users such as UI, API and also Spark Data Source!

```
export MLFLOW_TRACKING_URI <URI>
mlflow.set_tracking_uri(URI)
```

the mlflow tracking backend stores are typically the FileStore (local filesystem) and SQLSTORE (via SQLalchemy) which could be done in MySql but also in SQLITE. also with the artifact we could use local filesystem or technologies that allows to store blob such as S3.