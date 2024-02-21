# Project Mutations

## createProject

Create a [Project](./objects.md#project)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Project name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Project description</td>
    </tr>
    <tr>
        <td nowrap><code>startsAt</code></td>
        <td nowrap><code>Date</code></td>
        <td>When the project will start in UTC date string</td>
    </tr>
    <tr>
        <td nowrap><code>endsAt</code></td>
        <td nowrap><code>Date</code></td>
        <td>When the project will end in UTC date string</td>
    </tr>
    <tr>
        <td nowrap><code>managers</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>List of user IDs</td>
    </tr>
</table>

**Return Fields**

Expects to return [Project](./objects.md#project)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createProject(
                input: {
                    name: "Air as a Service"
                    description: "This is to test next generation HVAC service"
                    startsAt: "2020-07-21"
                    endsAt: "2021-05-21"
                    managers: [
                        "4f670a92-3ad5-4ea2-b81a-6207f9a53577"
                        "59a3c47e-eb3c-4e1e-9978-35dc01a46e3a"
                    ]
                }
            ) {
                id
                name
                description
                startsAt
                endsAt
                managers {
                    id
                    username
                }
                createdBy {
                    id
                    username
                }
                createdAt
                updatedAt
                updatedBy {
                    username
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createProject": {
                "id": "d1a1edbc-eba4-4db6-adf8-db32357d1912",
                "name": "Air as a Service",
                "description": "This is to test next generation HVAC service",
                "startsAt": "2020-07-21",
                "endsAt": "2021-05-21",
                "managers": [
                    {
                        "id": "4f670a92-3ad5-4ea2-b81a-6207f9a53577",
                        "username": "johndoe"
                    },
                    {
                        "id": "59a3c47e-eb3c-4e1e-9978-35dc01a46e3a",
                        "username": "user2"
                    }
                ],
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c90",
                    "username": "user1"
                },
                "createdAt": "2020-09-23T20:31:15.154Z",
                "updatedAt": null,
                "updatedBy": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateProject

Update a [Project](./objects.md#project)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#project">Project</a></td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Project name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Project description</td>
    </tr>
    <tr>
        <td nowrap><code>startsAt</code></td>
        <td nowrap><code>Date</code></td>
        <td>When the project will start in UTC date string</td>
    </tr>
    <tr>
        <td nowrap><code>endsAt</code></td>
        <td nowrap><code>Date</code></td>
        <td>When the project will end in UTC date string</td>
    </tr>
    <tr>
        <td nowrap><code>managers</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>List of user IDs</td>
    </tr>
</table>

**Return Fields**

Expects to return [Project](./objects.md#project)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateProject {
            updateProject(
                input: {
                    id: "d1a1edbc-eba4-4db6-adf8-db32357d1912"
                    name: "Air as a Service"
                    description: "This is to test next generation HVAC service"
                    startsAt: "2020-07-21"
                    endsAt: "2021-05-21"
                    managers: [
                        "4f670a92-3ad5-4ea2-b81a-6207f9a53577"
                        "59a3c47e-eb3c-4e1e-9978-35dc01a46e3a"
                    ]
                }
            ) {
                id
                name
                description
                startsAt
                endsAt
                managers {
                    id
                    username
                }
                createdBy {
                    id
                    username
                }
                createdAt
                updatedAt
                updatedBy {
                    username
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createProject": {
                "id": "d1a1edbc-eba4-4db6-adf8-db32357d1912",
                "name": "Air as a Service",
                "description": "This is to test next generation HVAC service",
                "startsAt": "2020-07-21",
                "endsAt": "2021-05-21",
                "managers": [
                    {
                        "id": "4f670a92-3ad5-4ea2-b81a-6207f9a53577",
                        "username": "johndoe"
                    },
                    {
                        "id": "59a3c47e-eb3c-4e1e-9978-35dc01a46e3a",
                        "username": "user2"
                    }
                ],
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c90",
                    "username": "user1"
                },
                "createdAt": "2020-09-23T20:31:15.154Z",
                "updatedAt": "2019-12-18T23:29:21.043Z",
                "updatedBy": {
                    "username": "user1"
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteProject

Delete a [Project](./objects.md#project)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#project">Project</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [Project](./objects.md#project)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation deleteProject {
            deleteProject(
                input: {
                    id: "d1a1edbc-eba4-4db6-adf8-db32357d1912"
                }
            ) {
                id
                name
                description
                startsAt
                endsAt
                managers {
                    id
                    username
                }
                createdBy {
                    id
                    username
                }
                createdAt
                updatedAt
                updatedBy {
                    username
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteProject": {
                "id": "d1a1edbc-eba4-4db6-adf8-db32357d1912",
                "name": "Air as a Service",
                "description": "This is to test next generation HVAC service",
                "startsAt": "2020-07-21",
                "endsAt": "2021-05-21",
                "managers": [
                    {
                        "id": "4f670a92-3ad5-4ea2-b81a-6207f9a53577",
                        "username": "johndoe"
                    },
                    {
                        "id": "59a3c47e-eb3c-4e1e-9978-35dc01a46e3a",
                        "username": "user2"
                    }
                ],
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c90",
                    "username": "user1"
                },
                "createdAt": "2020-09-23T20:31:15.154Z",
                "updatedAt": "2019-12-18T23:29:21.043Z",
                "updatedBy": {
                    "username": "user1"
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createAccessGroup

Create an [AccessGroup](./interfaces.md#accessgroup)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Access Group name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Access Group description</td>
    </tr>
    <tr>
        <td nowrap><code>projectId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>The project the access group is a part of</td>
    </tr>
    <tr>
        <td nowrap><code>parentGroupId</code></td>
        <td nowrap><code>ID</code></td>
        <td>The parent access group if this is a child of that group</td>
    </tr>
</table>

**Return Fields**

Expects to return [ManagerProjectGroup](./objects.md#managerprojectgroup)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation createAccessGroup {
            createAccessGroup(
                input: {
                    name: "TI Team"
                    description: "DSV TI Team"
                    projectId: "a5367d4f-5992-4938-9666-6da1c94a80eb"
                    parentGroupId: "2d9662a1-ab25-47dc-9c69-1cb018aa04a4"
                }
            ) {
                id
                project {
                    id
                    name
                }
                name
                description
                parentGroup {
                  id
                  name
                }
                createdBy {
                    username
                }
                createdAt
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "createAccessGroup": {
                "id": "9c776f52-462c-4b38-b27e-05dfb8f4038e",
                "project": {
                    "id": "a5367d4f-5992-4938-9666-6da1c94a80eb",
                    "name": "Air as a Service"
                },
                "name": "TI team",
                "description": "DSV TI Team",
                "parentGroup": {
                    "id": "2d9662a1-ab25-47dc-9c69-1cb018aa04a4",
                    "name": "DSV"
                },
                "createdBy": {
                    "username": "usernam"
                },
                "createdAt": "2020-10-08T21:22:50.616Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateAccessGroup

Update an [AccessGroup](./interfaces.md#accessgroup)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./interfaces.html#accessgroup">AccessGroup</a></td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Access Group name</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Access Group description</td>
    </tr>
    <tr>
        <td nowrap><code>projectId</code></td>
        <td nowrap><code>ID</code></td>
        <td>The project the access group is a part of</td>
    </tr>
    <tr>
        <td nowrap><code>parentGroupId</code></td>
        <td nowrap><code>ID</code></td>
        <td>The parent access group if this is a child of that group</td>
    </tr>
</table>

**Return Fields**

Expects to return [ManagerProjectGroup](./objects.md#managerprojectgroup)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateAccessGroup {
            updateAccessGroup(
                input: {
                    id: "9c776f52-462c-4b38-b27e-05dfb8f4038e"
                    description: "Technology Innovation Group"
                }
            ) {
                id
                name
                description
                project {
                    id
                    name
                }
                parentGroup {
                    id
                    name
                }
                createdBy {
                    username
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateAccessGroup": {
                "id": "9c776f52-462c-4b38-b27e-05dfb8f4038e",
                "name": "TI team",
                "description": "Technology Innovation Group",
                "project": {
                    "id": "a5367d4f-5992-4938-9666-6da1c94a80eb",
                    "name": "Air as a Service"
                },
                "parentGroup": {
                    "id": "2d9662a1-ab25-47dc-9c69-1cb018aa04a4",
                    "name": "DSV"
                },
                "createdBy": {
                    "username": "username"
                }
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteAccessGroup

Delete an [AccessGroup](./interfaces.md#accessgroup)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./interfaces.html#accessgroup">AccessGroup</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [ManagerProjectGroup](./objects.md#managerprojectgroup)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation deleteAccessGroup {
            deleteAccessGroup(input: { id: "45dab29a-3b95-47f0-828c-a83b546ca093" }) {
                id
                name
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteAccessGroup": {
                "id": "45dab29a-3b95-47f0-828c-a83b546ca093",
                "name": "my access group"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## addGroupParticipants

Add [Participants](./objects.md#participant)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Parent Access Group participant is part of</td>
    </tr>
    <tr>
        <td nowrap><code>participants</code></td>
        <td nowrap><code>[participantsInput!]!</code></td>
        <td>
            <table>
                <tr>
                    <th nowrap>Argument</th>
                    <th nowrap>Type</th>
                    <th nowrap>Description</th>
                </tr>
                <tr>
                    <td nowrap><code>userID!</code></td>
                    <td nowrap><code>ID!</code></td>
                    <td>ID of user</td>
                </tr>
                <tr>
                    <td nowrap><code>canWrite!</code></td>
                    <td nowrap><code>Boolean!</code></td>
                    <td>Whether or not participant has write permissions</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Participant](./objects.md#participant) ]!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation addGroupParticipants {
            addGroupParticipants(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                    participants: [
                        { userId: "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b", canWrite: false }
                    ]
                }
            ) {
                user {
                    id
                    username
                }
                canWrite
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "addGroupParticipants": [
                {
                    "user": {
                        "id": "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b",
                        "username": "user"
                    },
                    "canWrite": false
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateGroupParticipants

Update [Participants](./objects.md#participant)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Parent Access Group participant is part of</td>
    </tr>
    <tr>
        <td nowrap><code>participants</code></td>
        <td nowrap><code>[participantsInput!]!</code></td>
        <td>
            <table>
                <tr>
                    <th nowrap>Argument</th>
                    <th nowrap>Type</th>
                    <th nowrap>Description</th>
                </tr>
                <tr>
                    <td nowrap><code>userID!</code></td>
                    <td nowrap><code>ID!</code></td>
                    <td>ID of user</td>
                </tr>
                <tr>
                    <td nowrap><code>canWrite!</code></td>
                    <td nowrap><code>Boolean!</code></td>
                    <td>Whether or not participant has write permissions</td>
                </tr>
            </table>
        </td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Participant](./objects.md#participant) ]!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation updateGroupParticipants {
            updateGroupParticipants(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                    participants: [
                        { userId: "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b", canWrite: false }
                    ]
                }
            ) {
                user {
                    id
                    username
                }
                canWrite
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "updateGroupParticipants": [
                {
                    "user": {
                        "id": "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b",
                        "username": "user"
                    },
                    "canWrite": false
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteGroupParticipants

Delete [Participants](./objects.md#participant)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Parent Access Group participant is part of</td>
    </tr>
    <tr>
        <td nowrap><code>participants</code></td>
        <td nowrap><code>[ID!]!</code></td>
        <td>User ID's of participants to delete</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Participant](./objects.md#participant) ]!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation deleteGroupParticipants {
            deleteGroupParticipants(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                    participants: [
                        "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b"
                    ]
                }
            ) {
                user {
                    id
                    username
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteGroupParticipants": [
                {
                    "user": {
                        "id": "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b",
                        "username": "user"
                    }
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## addGroupEquipments

Add [GroupEquipments](./objects.md#groupequipment)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Access Group equipment should be added to</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code>[ID!]!</code></td>
        <td>Equipments to add</td>
    </tr>
</table>

**Return Fields**

Expects to return a list of added Equipment [ ID! ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation addGroupEquipments {
            addGroupEquipments(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                    equipment: ["bdeb00c6-ec65-4986-af72-2fe261f053c7"]
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "addGroupEquipments": [
                "bdeb00c6-ec65-4986-af72-2fe261f053c7"
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteGroupEquipments

Delete [GroupEquipments](./objects.md#groupequipment)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Access Group equipment should be added to</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code>[ID!]!</code></td>
        <td>Equipments to add</td>
    </tr>
</table>

**Return Fields**

Expects to return a list of deleted Equipment [ ID! ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation deleteGroupEquipments {
            deleteGroupEquipments(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                    equipment: ["bdeb00c6-ec65-4986-af72-2fe261f053c7"]
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "deleteGroupEquipments": [
                "bdeb00c6-ec65-4986-af72-2fe261f053c7"
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## addGroupService

Add a [GroupServices](./interfaces.md#groupservice)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Access Group ID</td>
    </tr>
    <tr>
        <td nowrap><code>services</code></td>
        <td nowrap><code>[<a href="#addgroupserviceservicesinput">addGroupServiceServicesInput</a>!]</code></td>
        <td>List of Value Added Services</td>
    </tr>
</table>

<span id="addgroupserviceservicesinput">addGroupServiceServicesInput<span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Service ID</td>
    </tr>
    <tr>
        <td nowrap><code>airRiskAttributes</code></td>
        <td nowrap><code><a href="#airriskattributesinput">airRiskAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning an Air Risk Service</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentAlertsAttributes</code></td>
        <td nowrap><code><a href="#equipmentalertsattributesinput">equipmentAlertsAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning an Equipment Alerts Service</td>
    </tr>
    <tr>
        <td nowrap><code>spatialIntelligenceAttributes</code></td>
        <td nowrap><code><a href="#spatialintelligenceattributesinput">spatialIntelligenceAttributesInput</a></code></td>
        <td>attributes to assign - optional attributes when assigning a Spatial Intelligence Service</td>
    </tr>
    <tr>
        <td nowrap><code>residentialAlertsAttributes</code></td>
        <td nowrap><code><a href="#residentialalertsattributesinput">residentialAlertsAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning a Residential Alerts Service</td>
    </tr>
    <tr>
        <td nowrap><code>trendGraphsAttributes</code></td>
        <td nowrap><code><a href="#trendgraphsattributesinput">trendGraphsAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning a Trend Graphs Service</td>
    </tr>
</table>

<span id="airriskattributesinput">airRiskAttributesInput<span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>viewType</code></td>
        <td nowrap><code><a href="./enums.html#airriskserviceviewtypes">AirRiskServiceViewTypes</a>!</code></td>
        <td>View type to assign</td>
    </tr>
    <tr>
        <td nowrap><code>xyCoordinates</code></td>
        <td nowrap><code>[<a href="#airriskcoordinatesinput">airRiskCoordinatesInput</a>!]</code></td>
        <td>xy coordinates to assign project equipment</td>
    </tr>
</table>

<span id="airriskcoordinatesinput">airRiskCoordinatesInput<span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Equipment ID</td>
    </tr>
    <tr>
        <td nowrap><code>x</code></td>
        <td nowrap><code>Float</code></td>
        <td>x coordinate value</td>
    </tr>
    <tr>
        <td nowrap><code>y</code></td>
        <td nowrap><code>Float</code></td>
        <td>y coordinate value</td>
    </tr>
</table>

<span id="equipmentalertsattributesinput">equipmentAlertsAttributesInput<span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code>!</td>
        <td>Whether or not the service is active.</td>
    </tr>
    <tr>
        <td nowrap><code>secondsAfterStoppedReporting</code></td>
        <td nowrap><code>Int</code>!</td>
        <td>How many seconds to wait until an alert is sent.</td>
    </tr>
</table>

<span id="spatialintelligenceattributesinput">spatialIntelligenceAttributesInput<span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>iaqThresholds</code></td>
        <td nowrap><code><a href="#spatialintelligenceiaqthresholdsinput">spatialIntelligenceIaqThresholdsInput</a></code></td>
        <td>Ceiling and floors for iaq sensor data points</td>
    </tr>
    <tr>
        <td nowrap><code>pm25Equipment</code></td>
        <td nowrap><code><a href="#spatialintelligencepm25equipmentinput">spatialIntelligencePM25EquipmentInput</a></code></td>
        <td>Ceiling and floors for iaq sensor data points</td>
    </tr>
</table>

<span id="spatialintelligenceiaqthresholdsinput">spatialIntelligenceIaqThresholdsInput<span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>minTemperature</code></td>
        <td nowrap><code>Float</code></td>
        <td>Lowest range for temperature data point</td>
    </tr>
    <tr>
        <td nowrap><code>maxTemperature</code></td>
        <td nowrap><code>Float</code></td>
        <td>Highest range for temperature data point</td>
    </tr>
    <tr>
        <td nowrap><code>minHumidity</code></td>
        <td nowrap><code>Float</code></td>
        <td>Lowest range for humidity data point</td>
    </tr>
    <tr>
        <td nowrap><code>maxHumidity</code></td>
        <td nowrap><code>Float</code></td>
        <td>Highest range for humidity data point</td>
    </tr>
    <tr>
        <td nowrap><code>minCO2</code></td>
        <td nowrap><code>Float</code></td>
        <td>Lowest range for CO2 data point</td>
    </tr>
    <tr>
        <td nowrap><code>maxCO2</code></td>
        <td nowrap><code>Float</code></td>
        <td>Highest range for CO2 data point</td>
    </tr>
    <tr>
        <td nowrap><code>minPM25</code></td>
        <td nowrap><code>Float</code></td>
        <td>Lowest range for PM2.5 data point</td>
    </tr>
    <tr>
        <td nowrap><code>maxPM25</code></td>
        <td nowrap><code>Float</code></td>
        <td>Highest range for PM2.5 data point</td>
    </tr>
</table>

<span id="spatialintelligencepm25equipmentinput">spatialIntelligencePM25EquipmentInput<span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>indoor</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Indoor equipment ref to read PM2.5 data from</td>
    </tr>
    <tr>
        <td nowrap><code>outdoor</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Outdoor equipment ref to read PM2.5 data from</td>
    </tr>
</table>

<span id="residentialalertsattributesinput">residentialAlertsAttributesInput<span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>[<a href="./enums.html#residentialalertsservicealerttypes">ResidentialAlertsServiceAlertTypes</a>!]</code></td>
        <td>List of enabled alerts</td>
    </tr>
    <tr>
        <td nowrap><code>configuration</code></td>
        <td nowrap><code>[<a href="#residentialalertsattributesconfigurationinput">residentialAlertsAttributesConfigurationInput</a>!]</code></td>
        <td>Configuration for each alert type</td>
    </tr>
</table>

<span id="residentialalertsattributesconfigurationinput">residentialAlertsAttributesConfigurationInput<span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>alertType</code></td>
        <td nowrap><code><a href="./enums.html#residentialalertsservicealerttypes">ResidentialAlertsServiceAlertTypes</a>!</code></td>
        <td>Alert type to configure</td>
    </tr>
    <tr>
        <td nowrap><code>sendEmail</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether to send email alerts to project participants</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentId</code></td>
        <td nowrap><code>ID</code></td>
        <td>The reference equipment to base the alert</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoint</code></td>
        <td nowrap><code>String</code></td>
        <td>The data point holding the information that determines the alarm condition</td>
    </tr>
    <tr>
        <td nowrap><code>minimumSecondsToAlertOn</code></td>
        <td nowrap><code>Int</code></td>
        <td>
            The minimum time in seconds the alarm condition needs to persist before triggering the alert. For ex., <code>300</code> if clogging to persist minimum 5 minutes before triggering the alarm.
        </td>
    </tr>
    <tr>
        <td nowrap><code>minimumSecondsToAlertOff</code></td>
        <td nowrap><code>Int</code></td>
        <td>
            The minimum time in seconds the no-alarm condition needs to persist before turning off the alert. For ex., <code>300</code> if no-clogging to persist minimum 5 minutes before turning off the alarm.
        </td>
    </tr>
    <tr>
        <td nowrap><code>minimumSecondsBetweenAlerts</code></td>
        <td nowrap><code>Int</code></td>
        <td>
            The minimum time in seconds between the alerts. This is to avoid triggering too many alerts, if the alarm condition does not get resolved for a while. For ex., <code>3600</code> if we only want the alert to keep going out every 1 hour.
        </td>
    </tr>
</table>

<span id="trendgraphsattributesinput">trendGraphsAttributesInput<span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>enabledGraphs</code></td>
        <td nowrap>[<code>String!]</code></td>
        <td>List of enabled graphs. Corresponds to <code>name</code> in a <a href="#trendgraphsattributessetsinput">trendGraphsAttributesSetsInput</a></td>
    </tr>
    <tr>
        <td nowrap><code>trendGraphSets</code></td>
        <td nowrap><code>[<a href="#trendgraphsattributessetsinput">trendGraphsAttributesSetsInput</a>!]</code></td>
        <td>A list of all trend graph sets</td>
    </tr>
</table>

<span id="trendgraphsattributessetsinput">trendGraphsAttributesSetsInput<span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>A name to describe the set of trend graphs</td>
    </tr>
    <tr>
        <td nowrap><code>graphs</code></td>
        <td nowrap><code>[<a href="#trendgraphsattributesgraphsinput">trendGraphsAttributesGraphsInput</a>!]!</code></td>
        <td>A list of all trend graphs within the set</td>
    </tr>
</table>

<span id="trendgraphsattributesgraphsinput">trendGraphsAttributesGraphsInput<span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Title to describe the trend graph</td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code><a href="./enums.html#trendgraphtypes">TrendGraphTypes</a>!</code></td>
        <td>Trend graph type</td>
    </tr>
    <tr>
        <td nowrap><code>yAxis</code></td>
        <td nowrap><code><a href="#trendgraphsattributesyaxisinput">trendGraphsAttributesYAxisInput</a>!</code></td>
        <td>Configuration for the y axis of the graph</td>
    </tr>
    <tr>
        <td nowrap><code>plots</code></td>
        <td nowrap><code>[<a href="#trendgraphsattributesplotinput">trendGraphsAttributesPlotInput</a>!]</code></td>
        <td>List of configurations for plotting individual equipment data</td>
    </tr>
</table>

<span id="trendgraphsattributesyaxisinput">trendGraphsAttributesYAxisInput</span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>displayName</code></td>
        <td nowrap><code>String!</code></td>
        <td>Label name to display in the graph</td>
    </tr>
    <tr>
        <td nowrap><code>domainMin</code></td>
        <td nowrap><code>Int</code></td>
        <td>The domain minimum. Defaults to the minimum value of data set.</td>
    </tr>
    <tr>
        <td nowrap><code>domainMax</code></td>
        <td nowrap><code>Int</code></td>
        <td>The domain maximum. Defaults to maximum value of data set.</td>
    </tr>
</table>

<span id="trendgraphsattributesplotinput">trendGraphsAttributesPlotInput</span>

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>equipmentId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID of the equipment</td>
    </tr>
    <tr>
        <td nowrap><code>dataPoint</code></td>
        <td nowrap><code>String!</code></td>
        <td>The original data point name to plot</td>
    </tr>
    <tr>
        <td nowrap><code>displayName</code></td>
        <td nowrap><code>String!</code></td>
        <td>Label name to display in the graph</td>
    </tr>
    <tr>
        <td nowrap><code>color</code></td>
        <td nowrap><code>String</code></td>
        <td>Value to override the plot color. Will take any valid CSS color.</td>
    </tr>
</table>

**Return Fields**

Expects to return [ ID! ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            addGroupService(
                input: {
                    groupId: "469fc43c-0cf4-4e4a-b504-e12ae0fd2c54"
                    services: [
                        {
                            id: "087c6447-f671-4b5e-b8c8-2a855937cc87"
                            airRiskAttributes: {
                                viewType: SPATIAL_INTERPOLATION
                                xyCoordinates: [
                                    {
                                        id: "bbcc675e-51bb-462a-97c9-dcf9c6dcf214"
                                        x: null
                                        y: null
                                    }
                                ]
                            }
                        }
                        {
                            id: "32366d80-cae8-48b3-865d-89ce207637d2"
                            equipmentAlertsAttributes: {
                                enabled: true
                                secondsAfterStoppedReporting: 600
                            }
                        }
                        {
                            id: "096143ae-59de-4da4-b8fd-782387cac46a"
                            spatialIntelligenceAttributes: {
                                iaqThresholds: {
                                    minTemperature: 17
                                    maxTemperature: 28
                                    minHumidity: 40
                                    maxHumidity: 80
                                    minCO2: 300
                                    maxCO2: 1000
                                    minPM25: 0
                                    maxPM25: 35
                                }
                            }
                        }
                        {
                            id: "af6dc5cd-3200-4b1f-99e6-0297834eefe0"
                            residentialAlertsAttributes: {
                                enabled: [
                                    DRAINPIPE_CLOGGED
                                    HEATING_ISSUE
                                    COOLING_ISSUE
                                    LOW_TEMP
                                    HIGH_TEMP
                                ]
                                configuration: [
                                    { 
                                        alertType: DRAINPIPE_CLOGGED, 
                                        sendEmail: false, 
                                        equipmentId: "bbcc675e-51bb-462a-97c9-dcf9c6dcf214",
                                        dataPoint: "dataPoint",
                                        minimumSecondsBetweenAlerts: 3000 
                                    }
                                    { alertType: HEATING_ISSUE, sendEmail: false }
                                    { alertType: COOLING_ISSUE, sendEmail: false }
                                    { alertType: LOW_TEMP, sendEmail: false }
                                    { alertType: HIGH_TEMP, sendEmail: false }
                                ]
                            }
                        }
                        {
                            id: "e1481762-67ca-40fb-a235-33a07aabf56f"
                            trendGraphsAttributes: {
                                enabledGraphs: ["Airside Diagnostics"]
                                trendGraphSets: [
                                    {
                                        name: "Airside Diagnostics"
                                        graphs: [
                                            {
                                                name: "Temperature (°F)"
                                                type: TIMESERIES
                                                yAxis: {
                                                    displayName: "Temperature"
                                                    domainMin: 10
                                                    domainMax: 120
                                                }
                                                plots: [
                                                    {
                                                        equipmentId: "3cd33800-3595-44a3-9297-88cf1061ca97"
                                                        dataPoint: "temp"
                                                        displayName: "R/A"
                                                        color: "red"
                                                    }
                                                    {
                                                        equipmentId: "3036e58c-e65f-41a2-b255-e5ee6c992b7e"
                                                        dataPoint: "temperature"
                                                        displayName: "S/A"
                                                        color: "green"
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        }
                    ]
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "addGroupService": [
                "a83ebc8d-f480-40c3-9f3d-c6cda47c7609",
                "32366d80-cae8-48b3-865d-89ce207637d2",
                "096143ae-59de-4da4-b8fd-782387cac46a",
                "af6dc5cd-3200-4b1f-99e6-0297834eefe0",
                "e1481762-67ca-40fb-a235-33a07aabf56f"
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateGroupService

Update a [GroupService](./interfaces.md#groupservice)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Access Group ID</td>
    </tr>
    <tr>
        <td nowrap><code>serviceId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Value Added Service to update</td>
    </tr>
    <tr>
        <td nowrap><code>airRiskAttributes</code></td>
        <td nowrap><code><a href="#airriskattributesinput">airRiskAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning an Air Risk Service</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentAlertsAttributes</code></td>
        <td nowrap><code><a href="#equipmentalertsattributesinput">equipmentAlertsAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning an Equipment Alerts Service</td>
    </tr>
    <tr>
        <td nowrap><code>spatialIntelligenceAttributes</code></td>
        <td nowrap><code><a href="#spatialintelligenceattributesinput">spatialIntelligenceAttributesInput</a></code></td>
        <td>attributes to assign - optional attributes when assigning a Spatial Intelligence Service</td>
    </tr>
    <tr>
        <td nowrap><code>residentialAlertsAttributes</code></td>
        <td nowrap><code><a href="#residentialalertsattributesinput">residentialAlertsAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning a Residential Alerts Service</td>
    </tr>
    <tr>
        <td nowrap><code>trendGraphsAttributes</code></td>
        <td nowrap><code><a href="#trendgraphsattributesinput">trendGraphsAttributesInput</a></code></td>
        <td>attributes to assign - only necessary when assigning a Trend Graphs Service</td>
    </tr>
</table>

**Return Fields**

Expects to return [GroupService](./interfaces.md#groupservice)!

**Example**

!!! example "Sample Input"

    === "Air Risk"
        ```
        mutation {
            updateGroupService(
                input: {
                    groupId: "b81ed625-dbe0-4387-913d-f73e72942e36",
                    serviceId: "198d857a-2b98-4794-89ff-44ce950fa8cd",
                    airRiskAttributes: {
                        viewType: SPATIAL_INTERPOLATION
                        xyCoordinates: [
                            { 
                                id: "bbcc675e-51bb-462a-97c9-dcf9c6dcf214", x: 3.5, y: 4.8
                            }
                        ]
                    }
                }
            ) {
                ... on AirRiskGroupService {
                    service {
                        id
                        name
                    }
                    group {
                        id
                        name
                        ... on ParticipantProjectGroup {
                            canWrite
                        }
                    }
                    viewType
                    xyCoordinates {
                        id
                        x
                        y
                    }
                }
            }
        }
        ```
    === "Residential Alerts"
        ```
        mutation {
            updateGroupService(
                input: {
                    groupId: "b81ed625-dbe0-4387-913d-f73e72942e36",
                    serviceId: "af6dc5cd-3200-4b1f-99e6-0297834eefe0",
                    residentialAlertsAttributes: {
                        enabled: [ HIGH_TEMP ]
                        configuration: [
                            { 
                                alertType: HIGH_TEMP, 
                                sendEmail: false,
                                equipmentId: "bbcc675e-51bb-462a-97c9-dcf9c6dcf214",
                                dataPoint: "dataPoint",
                                minimumSeconds: 500,
                                minimumSecondsBetween: 3000 
                            }
                        ]
                    }
                }
            ) {
                ... on ResidentialAlertsGroupService {
                    enabledAlerts
                    alertInfo {
                        HighTemp {
                            configuration {
                                sendEmail
                                equipmentId
                                dataPoint
                                minimumSeconds
                                minimumSecondsBetween
                            }
                        }
                    }
                }
            }
        }
        ```
    === "Trend Graphs"
        ```
        mutation {
            updateGroupService(
                input: {
                    groupId: "bf5502ee-4cb4-498d-a82e-96c7fa59b663"
                    serviceId: "e1481762-67ca-40fb-a235-33a07aabf56f"
                    trendGraphsAttributes: {
                        enabledGraphs: ["Airside Diagnostics"]
                        trendGraphSets: [
                            {
                                name: "Airside Diagnostics"
                                graphs: [
                                    {
                                        name: "Temperature (°F)"
                                        type: TIMESERIES
                                        yAxis: {
                                            displayName: "Temperature"
                                            domainMin: 10
                                            domainMax: 120
                                        }
                                        plots: [
                                            {
                                                equipmentId: "3cd33800-3595-44a3-9297-88cf1061ca97"
                                                dataPoint: "temp"
                                                displayName: "R/A"
                                                color: "red"
                                            }
                                            {
                                                equipmentId: "3036e58c-e65f-41a2-b255-e5ee6c992b7e"
                                                dataPoint: "temperature"
                                                displayName: "S/A"
                                                color: "green"
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                }
            ) {
                ... on TrendGraphsGroupService {
                enabledGraphs
                trendGraphSets {
                    name
                    graphs {
                    name
                    type
                    plots {
                        displayName
                        equipmentId
                        dataPoint
                        color
                    }
                    yAxis {
                        displayName
                        domainMin
                        domainMax
                    }
                    }
                }
                }
            }
        }
        ```

!!! success "Sample Output"

    === "Air Risk"
        ```
        {
            "data": {
                "updateGroupService": {
                    "service": {
                        "id": "198d857a-2b98-4794-89ff-44ce950fa8cd",
                        "name": "INDOOR_AIR_RISK_VISUALIZATION"
                    },
                    "group": {
                        "id": "b81ed625-dbe0-4387-913d-f73e72942e36",
                        "name": "DSV",
                        "canWrite": true
                    },
                    "viewType": "FLOOR_PLAN",
                    "xyCoordinates": [
                        {
                            "id": "bbcc675e-51bb-462a-97c9-dcf9c6dcf214",
                            "x": 3.5,
                            "y": 4.8
                        }
                    ]
                }
            }
        }
        ```
    === "Residential Alerts"
        ```
        {
            "data": {
                "updateGroupService": {
                    "enabledAlerts": [
                        "HIGH_TEMP"
                    ],
                    "alertInfo": {
                        "HighTemp": {
                            "configuration": {
                                "sendEmail": false,
                                "equipmentId": "bbcc675e-51bb-462a-97c9-dcf9c6dcf214",
                                "dataPoint": "dataPoint",
                                "minimumSeconds": 500,
                                "minimumSecondsBetween": 3000 
                            }
                        }
                    }
                }
            }
        }
        ```
    === "Trend Graphs"
        ```
        {
            "data": {
                "updateGroupService": {
                    "enabledGraphs": [
                        "Airside Diagnostics"
                    ],
                    "trendGraphSets": [
                        {
                            "name": "Airside Diagnostics",
                            "graphs": [
                                {
                                    "name": "Temperature (°F)",
                                    "type": "TIMESERIES",
                                    "plots": [
                                        {
                                            "displayName": "R/A",
                                            "equipmentId": "3cd33800-3595-44a3-9297-88cf1061ca97",
                                            "dataPoint": "temp",
                                            "color": "red"
                                        },
                                        {
                                            "displayName": "S/A",
                                            "equipmentId": "3036e58c-e65f-41a2-b255-e5ee6c992b7e",
                                            "dataPoint": "temperature",
                                            "color": "green"
                                        }
                                    ],
                                    "yAxis": {
                                        "displayName": "Temperature",
                                        "domainMin": 10,
                                        "domainMax": 120
                                    }
                                }
                            ]
                        }
                    ]
                }
            }
        }
        ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateParticipantGroupService

This is the same API as [updateGroupService](#updategroupservice), reserved for `project participants` with write access.

See [addGroupParticipants](#addgroupparticipants) on how to give participants write access.
## removeGroupService

Remove a [GroupService](./interfaces.md#groupservice)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Access Group ID</td>
    </tr>
    <tr>
        <td nowrap><code>services</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>List of Value Added Services to remove</td>
    </tr>
</table>

**Return Fields**

Expects to return [ ID! ]!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            removeGroupService(
                input: {
                    groupId: "469fc43c-0cf4-4e4a-b504-e12ae0fd2c54"
                    services: ["a83ebc8d-f480-40c3-9f3d-c6cda47c7609"]
                }
            )
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "removeGroupService": [
                "a83ebc8d-f480-40c3-9f3d-c6cda47c7609"
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"