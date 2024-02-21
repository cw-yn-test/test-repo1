# Project Queries

## project

Retrieve requested [Project](./objects.md#project) information.

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
        {
            project(input: {id: "5f50d6d0-f910-4c0f-bd66-7ec15277f953"}){
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
                    username
                }
                updatedBy {
                    username
                }
                createdAt
                updatedAt
            }
        }
        ```

!!! success "Sample Output"

    ```
        {
            "data": {
                "project": {
                "id": "5f50d6d0-f910-4c0f-bd66-7ec15277f953",
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
                "updatedAt": "2019-12-18T23:29:21.043Z"
            }
        }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## projects

Retrieve all requested [Projects](./objects.md#project).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the project. Also supports partial matching.</td>
    </tr>
    <tr>
        <td nowrap><code>managers</code></td>
        <td nowrap><code>[ID]</code></td>
        <td>Managers involved in the project</td>
    </tr>
    <tr>
        <td nowrap><code>participant</code></td>
        <td nowrap><code>ID</code></td>
        <td>Participant involved in the project</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code>ID</code></td>
        <td>Equipment involved in the project</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#projectsorderby">ProjectsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Project](./objects.md#project) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            projects(
                input: {
                    name: "Air as a Service"
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
                username
                }
                updatedBy {
                username
                }
                createdAt
                updatedAt
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "projects": [
                {
                    "id": "cca3d3c6-44a4-4278-910f-47a8babb0f9d",
                    "name": "Air as a Service",
                    "description": "This is to test next generation HVAC service",
                    "startsAt": "2020-07-21",
                    "endsAt": "2021-05-21",
                    "managers": [
                    {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "buildinga"
                    },
                    {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "buildinga"
                    }
                    ],
                    "createdBy": {
                        "username": "buildinga"
                    },
                    "updatedBy": {
                        "username": "buildinga"
                    },
                    "createdAt": "2019-12-18T23:29:21.043Z",
                    "updatedAt": "2019-12-18T23:29:21.043Z"
                },
                {
                    "id": "cca3d3c6-44a4-4278-910f-47a8babb0f9d",
                    "name": "Air as a Service",
                    "description": "This is to test next generation HVAC service",
                    "startsAt": "2020-07-21",
                    "endsAt": "2021-05-21",
                    "managers": [
                    {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "buildinga"
                    },
                    {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "buildinga"
                    }
                    ],
                    "createdBy": {
                        "username": "buildinga"
                    },
                    "updatedBy": {
                        "username": "buildinga"
                    },
                    "createdAt": "2019-12-18T23:29:21.043Z",
                    "updatedAt": "2019-12-18T23:29:21.043Z"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## accessGroup

Retrieve requested [ManagerProjectGroup](./objects.md#managerprojectgroup) information.

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
        {
            accessGroup(input: { id: "483b57fc-cede-4804-ac41-1adf592ef5e3" }) {
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
                createdAt
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "accessGroup": {
                "id": "483b57fc-cede-4804-ac41-1adf592ef5e3",
                "name": "BI team",
                "description": "BI people",
                "project": {
                    "id": "a5367d4f-5992-4938-9666-6da1c94a80eb",
                    "name": "Air as a Service"
                },
                "parentGroup": {
                    "id": "2d9662a1-ab25-47dc-9c69-1cb018aa04a4",
                    "name": "DSV"
                },
                "createdBy": {
                    "username": "user"
                },
                "createdAt": "2020-10-08T21:21:11.364Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## accessGroups

Retrieve all requested [ManagerProjectGroups](./objects.md#managerprojectgroup)

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>projectId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Parent Project group is part of</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the access group. Also supports partial matching.</td>
    </tr>
    <tr>
        <td nowrap><code>participant</code></td>
        <td nowrap><code>ID</code></td>
        <td>Participant in the access group</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Equipment involved in the access group</td>
    </tr>
    <tr>
        <td nowrap><code>parentGroupId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the parent access group if entry is a child</td>
    </tr>
    <tr>
        <td nowrap><code>immediateOnly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to return immediate children only. Default is false.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#accessgroupsorderby">AccessGroupsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [ManagerProjectGroup](./objects.md#managerprojectgroup) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            accessGroups(input: {
                projectId: "a5367d4f-5992-4938-9666-6da1c94a80eb",
                parentGroupId: "2d9662a1-ab25-47dc-9c69-1cb018aa04a4"
            }) {
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
            "accessGroups": [
                {
                    "id": "483b57fc-cede-4804-ac41-1adf592ef5e3",
                    "name": "BI team",
                    "description": "BI people",
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
                },
                {
                    "id": "9c776f52-462c-4b38-b27e-05dfb8f4038e",
                    "name": "TI team",
                    "description": "TI people",
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
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## groupParticipants

Retrieve all requested [Participants](./objects.md#participant).

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
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Participant!](./objects.md#participant) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            groupParticipants(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                }
            ){
                user {
                    id
                    username
                }
                canWrite
                group {
                    name
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "groupParticipants": [
                {
                    "user": {
                        "id": "4f670b92-3bd5-4eb2-b81b-6207f9b53577",
                        "username": "user@gmail.com"
                    },
                    "canWrite": true,
                    "group": {
                        "name": "DSV"
                    }
                },
                {
                    "user": {
                        "id": "59b3c47e-eb3c-4e1e-9978-35dc01b46e3b",
                        "username": "user"
                    },
                    "canWrite": false,
                    "group": {
                        "name": "DSV"
                    }
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## groupEquipments

Retrieve all requested [GroupEquipments](./objects.md#groupequipment).

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
        <td>Parent Access Group equipment is assigned to</td>
    </tr>
    <tr>
        <td nowrap><code>immediateOnly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to return immediate children only. Default is false.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#groupequipmentorderby">GroupEquipmentsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[CREATED_AT_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [GroupEquipment!](./objects.md#groupequipment) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            groupEquipments(
                input: {
                    groupId: "e7fc6205-ba6e-43a5-bd72-28206179a82b"
                    immediateOnly: true
                }
            ){
                group {
                    id
                    name
                }
                equipment {
                    id
                    name
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "groupEquipments": [
                {
                    "group": {
                        "id": "e7fc6205-ba6e-43a5-bd72-28206179a82b",
                        "name": "DSV"
                    },
                    "equipment": {
                        "id": "b8ef4654-aec3-4ae8-a491-b53b28c023a4",
                        "name": "Node"
                    }
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## groupEquipmentCandidates

Retrieve all eligible [Equipment](../equipmentManagement/equipmentInterfaces.md#equipmentinterface) that can be assigned to a group.

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
        <td>Access Group you want to assign equipment to</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the equipment. Also supports partial matching.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Equipment](../equipmentManagement/equipmentInterfaces.md#equipmentinterface) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            groupEquipmentCandidates(
                input: {
                    groupId: "b81ed625-dbe0-4387-913d-f73e72942e36",
                    name: "Node"
                }
            ) {
                id
                name
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "groupEquipmentCandidates": [
                {
                    "id": "2f2a1bae-ca10-468b-b6b5-8f854ad4ce27",
                    "name": "Node_12"
                },
                {
                    "id": "66996ea6-95f1-4364-9e3d-278ffa2ac544",
                    "name": "Node_34"
                },
                {
                    "id": "680fba51-aa30-4497-96d4-99800da383dc",
                    "name": "Node_44"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## participantEquipments

Retrieve all requested project [Equipment](../equipmentManagement/equipmentObjects.md#equipment).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>projectId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Parent project of the query</td>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Find equipment within the specified <a href="./interfaces.html#accessgroup">AccessGroup</a></td>
    </tr>
    <tr>
        <td nowrap><code>serviceId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Find equipment with the specified <a href="./interfaces.html#service">Service</a></td>
    </tr>
    <tr>
        <td nowrap><code>equipmentIds</code></td>
        <td nowrap>[<code>ID!</code>]</td>
        <td>Find equipment with the specified IDs</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Equipment](../equipmentManagement/equipmentObjects.md#equipment) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            participantEquipments(
                input: { projectId: "df0b820c-29eb-423f-a16d-571bc66c4c7f" }
            ) {
                id
                name
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "participantEquipments": [
                {
                    "id": "541eea35-ef94-4640-b496-72580b8055ab",
                    "name": "My Device"
                },
                {
                    "id": "9b0f9a2b-1032-4546-be98-e57921604fd0",
                    "name": "My node"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## participantProject

Retrieve requested [ParticipantProject](./objects.md#participantproject).

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
        <td>Unique ID representing the <a href="./objects.html#participantproject">ParticipantProject</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [ParticipantProject](./objects.md#participantproject)!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            participantProject(input: { id: "df0b820c-29eb-423f-a16d-571bc66c4c7f" }) {
                id
                name
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "participantProject": {
                "id": "df0b820c-29eb-423f-a16d-571bc66c4c7f",
                "name": "My Project"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## participantProjects

Retrieve all requested [ParticipantProjects](./objects.md#participantproject).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the project. Also supports partial matching.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
</table>

**Return Fields**

Expects to return [ [ParticipantProject](./objects.md#participantproject)! ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            participantProjects {
                id
                name
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "participantProjects": [
                {
                    "id": "df0b820c-29eb-423f-a16d-571bc66c4c7f",
                    "name": "My Project"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## participantProjectGroup

Retrieve requested [ParticipantProjectGroup](./objects.md#participantprojectgroup)

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
        <td>Unique ID representing the <a href="./interfaces.html#accessgroup">AccessGroup</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [ParticipantProjectGroup](./objects.md#participantprojectgroup)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            participantProjectGroup(
                input: {
                    groupId: "a36f52a9-ae0a-42b4-a9c7-b84d9b1f59ec"
                }
            ){
                id
                name
                canWrite
                hasAlert
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "participantProjectGroup": {
                "id": "a7a9f4b2-1c95-4162-9ecd-73fafca06953",
                "name": "Group1"
                "canWrite": true
                "hasAlert": false
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## participantProjectGroups

Retrieve all requested [ParticipantProjectGroup](./objects.md#participantprojectgroup).

**Inputs**

Input is mandatory for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>projectIds</code></td>
        <td nowrap><code>[ID!]!</code></td>
        <td>A list of unique ID representing the <a href="./objects.html#project">Project</a></td>
    </tr>
    <tr>
        <td nowrap><code>groupIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="./objects.html#participantprojectgroup">ParticipantProjectGroup</a> to search for.</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the group. Also supports partial matching.</td>
    </tr>
    <tr>
        <td nowrap><code>parentGroupId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the parent access group if entry is a child</td>
    </tr>
    <tr>
        <td nowrap><code>immediateOnly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to return immediate children only. Default is true.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#participantgroupsorderby">ParticipantGroupsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[GROUP_NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [ParticipantProjectGroup!](./objects.md#participantprojectgroup) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            participantProjectGroups(
                input: {
                    projectId: "a36f52a9-ae0a-42b4-a9c7-b84d9b1f59ec"
                }
            ){
                id
                name
                canWrite
                hasAlert
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "participantProjectGroups": [
                {
                    "id": "a7a9f4b2-1c95-4162-9ecd-73fafca06953",
                    "name": "Group1"
                    "canWrite": true
                    "hasAlert": false
                },
                {
                    "id": "233e4393-b253-4494-83d9-b565def1e99c",
                    "name": "Group2"
                    "canWrite": false
                    "hasAlert": true
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## participantServices

Retrieve all requested [GroupServices](./interfaces.md#groupservice).

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>projectId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Project Id.</td>
    </tr>
    <tr>
        <td nowrap><code>groupId</code></td>
        <td nowrap><code>ID</code></td>
        <td>Find services within the specified <a href="./interfaces.html#accessgroup">AccessGroup</a></td>
    </tr>
    <tr>
        <td nowrap><code>serviceId</code></td>
        <td nowrap><code>[ID]</code></td>
        <td>Limit the search to the specified services</td>
    </tr>
    <tr>
        <td nowrap><code>immediateOnly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to return services of immediate children only. Default is false.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#participantservicesorderby">ParticipantServicesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[CREATED_AT_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [GroupService!](./interfaces.md#groupservice) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            participantServices {
                group {
                    id
                    name
                    ... on ParticipantProjectGroup {
                        canWrite
                    }
                }
                service {
                        id
                        name
                        description
                    }
                ... on AirRiskGroupService {
                    viewType
                    xyCoordinates {
                        id
                        x
                        y
                    }
                    floorplan {
                        id
                    }
                }
                ... on EquipmentAlertsGroupService {
                    enabled
                    secondsAfterStoppedReporting
                }
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "participantServices": [
                {
                    "service": {
                        "id": "198d857a-2b98-4794-89ff-44ce950fa8cd",
                        "name": "INDOOR_AIR_RISK_VISUALIZATION",
                        "description": "This service helps the facility manager to visualize the risk from low quality air circulating"
                    },
                    "group": {
                        "id": "b81ed625-dbe0-4387-913d-f73e72942e36",
                        "name": null,
                        "canWrite": null
                    },
                    "floorplan": null,
                    "viewType": "SPATIAL_INTERPOLATION",
                    "xyCoordinates": [
                        {
                            "id": "65d82e28-e2f2-4b25-b984-2e2262494d5c",
                            "x": 3.07890625,
                            "y": 5.1
                        },
                        {
                            "id": "bbcc675e-51bb-462a-97c9-dcf9c6dcf214",
                            "x": 8.90390625,
                            "y": 5.4
                        },
                        {
                            "id": "0d652c42-5fc2-40ce-bab9-01f993331ffd",
                            "x": 4.35390625,
                            "y": 7.425
                        }
                    ]
                },
                {
                    "service": {
                        "id": "32366d80-cae8-48b3-865d-89ce207637d2",
                        "name": "EQUIPMENT_ALERTS",
                        "description": "This service generates various alerts including those when the assigned equipment stopped reporting."
                    },
                    "group": {
                        "id": "b81ed625-dbe0-4387-913d-f73e72942e36",
                        "name": null,
                        "canWrite": null
                    },
                    "enabled": true,
                    "secondsAfterStoppedReporting": 600
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## services

Retrieve all requested [ [Service](./interfaces.md#service) ].

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>disableCount</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether or not to include additional pagination information inside <code>extensions</code>. See additional info <a href="/index.html#pagination">here</a></td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#servicesorderby">ServicesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Service!](./interfaces.md#service) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            services {
                id
                name
                description
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "services": [
                {
                    "id": "a83ebc8d-f480-40c3-9f3d-c6cda47c7609",
                    "name": "Indoor Air Risk Visualization",
                    "description": "This service helps the facility manager to visualize the risk from low quality air circulating"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## service

Retrieve requested [Service](./interfaces.md#service).

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
        <td>Unique ID representing the <a href="./interfaces.html#service">Service</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [Service!](./interfaces.md#service)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            service(input: {id: "a83ebc8d-f480-40c3-9f3d-c6cda47c7609"}) {
                id
                name
                description
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "service": {
                "id": "a83ebc8d-f480-40c3-9f3d-c6cda47c7609",
                "name": "Indoor Air Risk Visualization",
                "description": "This service helps the facility manager to visualize the risk from low quality air circulating"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## groupServices

Retrieve all requested [ [GroupServices](./interfaces.md#groupservice) ] within the specified access group.

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
        <td>Access Group ID.</td>
    </tr>
    <tr>
        <td nowrap><code>immediateOnly</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>If true, returns only services directly added to this group. Otherwise, in addition, it returns all services in descendant groups as well.</td>
    </tr>
    <tr>
        <td nowrap><code>page</code></td>
        <td nowrap><code>Int</code></td>
        <td>Which page of the records to return</td>
    </tr>
    <tr>
        <td nowrap><code>rowsPerPage</code></td>
        <td nowrap><code>Int</code></td>
        <td>Records to return per page</td>
    </tr>
    <tr>
        <td nowrap><code>orderBy</code></td>
        <td nowrap><code>[<a href="./enums.html#groupservicesorderby">GroupServicesOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[CREATED_AT_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [GroupService](./interfaces.md#groupservice) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            groupServices(
                input: {
                    groupId: "da0ef5e7-7c2f-439f-800c-360a11aa78b1"
                }
            ) {
                service { id name }
                group { id name }
                createdBy { id username }
                updatedBy { id username }
                createdAt
                updatedAt
                ... on ResidentialAlertsGroupService {
                    enabledAlerts
                    alertInfo {
                        HighTemp {
                            configuration {
                                sendEmail
                                equipmentId
                                dataPoint
                                minimumSecondsBetweenAlerts
                            }
                            latestAlerts {
                                alertOn
                                lastMonitoredAt
                                detectedAt
                                lastDetectedAt
                                lastAlertSentAt
                            }
                        }
                    }
                }
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

    ```
    {
        "data": {
            "groupServices": [
                {
                    "service": {
                        "id": "a83ebc8d-f480-40c3-9f3d-c6cda47c7609",
                        "name": "Indoor Air Risk Visualization"
                    },
                    "group": {
                        "id": "da0ef5e7-7c2f-439f-800c-360a11aa78b1",
                        "name": "Western Division"
                    },
                    "createdBy": {
                    "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96",
                    "username": "niral"
                    },
                    "updatedBy": null,
                    "createdAt": "2020-12-17T20:52:08.755Z",
                    "updatedAt": null
                },
                {
                    "service": {
                        "id": "af6dc5cd-3200-4b1f-99e6-0297834eefe0",
                        "name": "RESIDENTIAL_ALERTS"
                    },
                    "group": {
                        "id": "bf5502ee-4cb4-498d-a82e-96c7fa59b663",
                        "name": "Home 1"
                    },
                    "createdBy": {
                        "id": "bf5502ee-4cb4-498d-a82e-96c7fa59b663",
                        "username": "joe"
                    },
                    "updatedBy": null,
                    "createdAt": "2022-10-28T17:52:35.112Z",
                    "updatedAt": null,
                    "enabledAlerts": [
                        "DRAINPIPE_CLOGGED",
                        "HEATING_ISSUE",
                        "COOLING_ISSUE",
                        "LOW_TEMP",
                        "HIGH_TEMP"
                    ],
                    "alertInfo": {
                        "HighTemp": {
                            "configuration": {
                                "sendEmail": false,
                                "equipmentId": "bbcc675e-51bb-462a-97c9-dcf9c6dcf214",
                                "dataPoint": "dataPoint",
                                "minimumSecondsBetweenAlerts": 3000 
                            },
                            "latestAlerts": {
                                "alertOn": true,
                                "lastMonitoredAt": "2022-10-28T17:52:35.112Z",
                                "detectedAt": "2022-10-28T17:52:35.112Z",
                                "lastDetectedAt": "2022-10-28T17:52:35.112Z",
                                "lastAlertSentAt": "2022-10-28T17:52:35.112Z"
                            }
                        }
                    }
                },
                {
                    "service": {
                        "id": "e1481762-67ca-40fb-a235-33a07aabf56f",
                        "name": "TREND_GRAPHS"
                    },
                    "group": {
                        "id": "da0ef5e7-7c2f-439f-800c-360a11aa78b1",
                        "name": "Western Division"
                    },
                    "createdBy": {
                        "id": "a2979c29-cfc8-4677-8ff0-38b1905b3a96",
                        "username": "niral"
                    },
                    "updatedBy": null,
                    "createdAt": "2020-12-17T20:52:08.755Z",
                    "updatedAt": null,
                    "enabledGraphs": [ "Airside Diagnostics" ],
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
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
