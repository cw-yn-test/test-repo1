# Organization Queries

## organization

Retrieve requested [Organization](./objects.md#organization) information.

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
        <td>Unique ID representing the <a href="./objects.html#organization">Organization</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [Organization](./objects.md#organization)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            organization (
                input: {
                    id: "4da5fb2b-f91a-4e89-8641-52ff07cb585f"
                }
            ) {
                id
                name
                alternativeName
                isCompany
                description
                website
                primaryContact {
                    id
                    name
                }
                parentOrg {
                    id
                    name
                }
                address {
                    id
                    address
                }
                countryCode
                customAttribute
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
                "organization": {
                    "id": "4da5fb2b-f91a-4e89-8641-52ff07cb585f",
                    "name": "TestOrg",
                    "alternativeName": "Tested Organization",
                    "isCompany": true,
                    "description": "Description of Test Org",
                    "website": "https://www.test.org.com/",
                    "primaryContact": {
                        "id": "f5b7e276-ed0c-4878-a98b-090b981f5f57",
                        "name": "John Doe"
                    },
                    "parentOrg": {
                        "id": "b8eca652-198a-43a0-b0c3-d8a8f1ac2889",
                        "name": "ParentOrg"
                    },
                    "address": {
                        "id": "97d9b0e7-f680-4cf9-ac07-b2430055dba3",
                        "name": "5451 Great America Pkwy Santa Clara, CA 95054"
                    },
                    "countryCode": "US",
                    "customAttribute": {
                        "custom1": true
                    },
                    "createdBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "updatedBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "createdAt": "2021-07-09T18:44:33.294Z",
                    "updatedAt": "2021-07-10T18:53:22.129Z"
                }
            }
        }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## organizations

Retrieve all requested [Organizations](./objects.md#organization).

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
        <td>Name of the Organization. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>parentId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="./objects.html#organization">Organization</a></code> ID of the parent organization</td>
    </tr>
    <tr>
        <td nowrap><code>addressId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="../locationManagement/objects.html#address">Address</a></code> ID of the Organization's address</td>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code>String</code></td>
        <td><code><a href="../locationManagement/objects.html#address">Address</a></code> of the Organization. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>equipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a></td>
    </tr>
    <tr>
        <td nowrap><code>associatedSiteEquipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a> that is located on the sites associated with the organization, regardless of whether the equipment is owned or operated by the organization</td>
    </tr>
    <tr>
        <td nowrap><code>siteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../locationManagement/objects.html#site">Site</a></td>
    </tr>
    <tr>
        <td nowrap><code>ioConnectionIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID representing the <a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IO Connection</a></td>
    </tr>
    <tr>
        <td nowrap><code>externalEquipmentIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the equipment ID from GPF Cloud.</td>
    </tr>
    <tr>
        <td nowrap><code>externalSiteIds</code></td>
        <td nowrap><code>[ID!]</code></td>
        <td>A list of unique ID from another system. For example, the site ID from GPF Cloud.</td>
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
        <td nowrap><code>[<a href="./enums.html#organizationsorderby">OrganizationsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Organization](./objects.md#organization)! ]!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            organizations (
                input: {
                    name: "Test"
                }
            ) {
                id
                name
                alternativeName
                isCompany
                description
                website
                primaryContact {
                    id
                    name
                }
                parentOrg {
                    id
                    name
                }
                address {
                    id
                    address
                }
                countryCode
                customAttribute
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
            "organizations": [
                {
                    "id": "4da5fb2b-f91a-4e89-8641-52ff07cb585f",
                    "name": "Test DSV",
                    "alternativeName": "Test Open Innovation Lab Silicon Valley",
                    "isCompany": true,
                    "description": "Test in Santa Clara",
                    "website": "https://www.test.dsv.com/",
                    "primaryContact": {
                        "id": "f5b7e276-ed0c-4878-a98b-090b981f5f57",
                        "name": "Jane Doe"
                    },
                    "parentOrg": {
                        "id": "b8eca652-198a-43a0-b0c3-d8a8f1ac2889",
                        "name": "Parent DSV"
                    },
                    "address": {
                        "id": "97d9b0e7-f680-4cf9-ac07-b2430055dba3",
                        "name": "5451 Great America Pkwy Santa Clara, CA 95054"
                    },
                    "countryCode": "US",
                    "customAttribute": {
                        "custom1": true,
                    },
                    "createdBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "updatedBy": null,
                    "createdAt": "2021-07-09T20:31:15.154Z",
                    "updatedAt": null
                },
                {
                    "id": "acffbbe9-f701-4837-a876-cdfd51b1fe48",
                    "name": "Test DSV 2",
                    "alternativeName": "Test Open Innovation Lab Silicon Valley 2",
                    "isCompany": true,
                    "description": "Test 2 in Santa Clara",
                    "website": "https://www.test.dsv2.com/",
                    "primaryContact": {
                        "id": "f5b7e276-ed0c-4878-a98b-090b981f5f57",
                        "name": "Jane Doe"
                    },
                    "parentOrg": {
                        "id": "b8eca652-198a-43a0-b0c3-d8a8f1ac2889",
                        "name": "Parent DSV"
                    },
                    "address": {
                        "id": "82f9b0e7-f680-4cf9-ac07-b2430055deb2",
                        "address": "5457 Great America Pkwy Santa Clara, CA 95054"
                    },
                    "countryCode": "US",
                    "customAttribute": {
                        "custom1": false,
                    },
                    "createdBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "updatedBy": null,
                    "createdAt": "2021-07-10T20:31:15.154Z",
                    "updatedAt": null
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## contacts

Retrieve all requested [Contacts](./objects.md#contact).

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
        <td>Name of the Contact. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>email</code></td>
        <td nowrap><code>String</code></td>
        <td>E-mail address of the Contact. Also supports partial matching</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's <code><a href="./objects.html#organization">Organization</a></code></td>
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
        <td nowrap><code>[<a href="./enums.html#contactsorderby">ContactsOrderBy</a>]</code></td>
        <td>The sorting order to return search results. The results that are returned will be sorted initially by the first element, followed by subsequent sub-sorting based on the second element, and so forth. Default is <code>[NAME_ASC]</code></td>
    </tr>
</table>

**Return Fields**

Expects to return [ [Contact](./objects.md#contact)! ]!

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            contacts (
                input: {
                    name: "Test"
                }
            ) {
                id
                name
                description
                email
                phone
                isCompany
                organization {
                    id
                    name
                }
                user {
                    id
                    username
                }
                customAttribute
                createdBy {
                    id
                    username
                }
                updatedBy {
                    id
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
            "contacts": [
                {
                    "id": "99f25793-cdb1-447f-bfdc-0fa544c7af6d",
                    "name": "Tester1",
                    "description": "Primary contact for Test",
                    "email": "tester1@email.com",
                    "phone": "999-999-9999",
                    "isCompany": true,
                    "organization": {
                        "id": "4da5fb2b-f91a-4e89-8641-52ff07cb585f",
                        "name": "TestOrg"
                    },
                    "user": {
                        "id": "0bb86e49-9f6c-405d-b592-09fb9ad3fd80",
                        "username": "tester1"
                    },
                    "customAttribute": {
                        "custom1": true
                    },
                    "createdBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "updatedBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "createdAt": "2021-07-08T22:40:46.145Z",
                    "updatedAt": "2021-07-09T21:34:46.444Z"
                },
                {
                    "id": "bfc3d1a5-1806-4765-a79b-ee206952a7fb",
                    "name": "Tester2",
                    "description": "Secondary contact for Test",
                    "email": "tester2@email.com",
                    "phone": "000-000-0000",
                    "isCompany": true,
                    "organization": {
                        "id": "4da5fb2b-f91a-4e89-8641-52ff07cb585f",
                        "name": "TestOrg"
                    },
                    "user": {
                        "id": "bd09a4dd-1f5f-48fb-ae81-226f9e11f70c",
                        "username": "tester2"
                    },
                    "customAttribute": {
                        "custom1": false
                    },
                    "createdBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "updatedBy": {
                        "id": "31713532-68e7-410f-8575-952df9149c77",
                        "username": "username1"
                    },
                    "createdAt": "2021-07-08T22:40:46.145Z",
                    "updatedAt": "2021-07-09T21:34:46.444Z"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"