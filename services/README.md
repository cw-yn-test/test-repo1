# Microservices in Zen

This document contains basic information pertaining to most of the microservices within Zen, each of which is located in a subdirectory of this `services` folder. We've consolidated the common information to this file so it is easier to keep up-to-date.

# Standard steps to run & test

## Set up cluster

Some microservices have dependencies on others and require a working cluster to fully test. Instructions for installing the cluster are in the README.md in the root folder of this repository.

## Update microservice within the cluster

After making edits to the code of one microservice, you can update it without restarting the entire cluster.

```
# cd .../microservice-directory
time npm run create-ms
```

View API docs:

`npm run view-ms`

Delete service from cluster:

`npm run delete-ms`

## Get JWT

Most microservices require a valid JWT to exercise their API. You can copy valid example tokens from `deploy/services/microservice/security-mock/auth/secrets/secrets-local.json`.

```
cat ../../../../deploy/services/microservice/security-mock/auth/secrets/secrets-local.json
```

## Stand-alone methods (no cluster)

These methods can be useful for microservicess that can be tested independently without the rest of the cluster. This assumes cassandra is already running - it's usually started either as part of `npm run create-zen` or running `npm run start-cassandra` from the repo root directory.

1. `cd .../microservice-directory`

### Node command line

```
npm run build-lerna
npm run start
```

This typically starts on a random port, which means you need to look for "running on port: XX", and use whatever port is mentioned there. Ex: "running on port: 51823" means go to http://localhost:51823/apidocs.

### Visual studio debugger

1. open vs-code
2. Click 'Add Folder to workspace ' & select microservices folder
3. Edit `index.js` and change `server.init({}, error => {` to `server.init({svcPort: 9200}, error => {`, or whatever port you like.
4. Insert break points wherever you like
5. Click Run->Start Debug
6. Start microservice.

Note, avoid checking "All exceptions" under breakpoints until after the service starts to avoid benign exceptions.

Steps to **let your microservice talk to others** in your local cluster:

1. Select the Configure gear icon on the Run view top bar.
   ![](https://code.visualstudio.com/assets/docs/editor/debugging/launch-configuration.png)
2. Under `configuration`, paste this new section:

```
            "env": {
                "EQUIPMENTMANAGER_HOST": "localhost",
                "EQUIPMENTMANAGER_PORT": 10117
            }
```

3. For a complete list of hosts & ports to customize, see `packages/service/lib/registry.js`
4. To get port numbers for each microservice, run `npm run view-zen` from the root folder in the microservices repo.

## Inspect data (& structure) in cassandra

You can examine a local cassandra DB with TablePlus, but TablePlus fails for commands like `describe table`. For that, cqlsh works better. You can install it with `pip2 install cqlsh` if you have a working python2.7 environment.

```
$ cqlsh
Connected to Test Cluster at 127.0.0.1:9042.
[cqlsh 5.0.1 | Cassandra 3.11.5 | CQL spec 3.4.4 | Native protocol v4]
Use HELP for help.
cqlsh> desc tables;
....
Keyspace equipment_timeseries
-----------------------------
data

...
cqlsh> use equipment_timeseries;
cqlsh:equipment_timeseries> desc table data;

CREATE TABLE equipment_timeseries.data (
    "equipmentId" text,
    "observedAt" timestamp,
...
```

# Checklist before committing code:

-   `npm run test` --> Should see no failures
-   `npm run lint` --> Should see no errors and preferably no warnings as well.
-   `npm run test -- --collect-coverage` --> Should see over 80% coverage in your changes

# How-to/What-to/Why-to unit tests

-   https://daikinsvoil.atlassian.net/wiki/spaces/IP/pages/360466/Unit+Tests+Code+Coverage
