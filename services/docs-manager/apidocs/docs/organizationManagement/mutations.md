# Organization Mutations

## createOrganization

Create an [Organization](./objects.md#organization)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>alternativeName</code></td>
        <td nowrap><code>String</code></td>
        <td>Alternative name of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Organization is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>website</code></td>
        <td nowrap><code>String</code></td>
        <td>Website URL of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>contactId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="./objects.html#contact">Contact</a></code> ID of the primary contact</td>
    </tr>
    <tr>
        <td nowrap><code>parentId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="./objects.html#organization">Organization</a></code> ID of the parent organization</td>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code>String</code></td>
        <td>Address of organization (NOTE: Either use <code>address</code> or <code>addressId</code>)</td>
    </tr>
    <tr>
        <td nowrap><code>addressId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="../locationManagement/objects.html#address">Address</a></code> ID of the Organization's address (NOTE: Either use <code>address</code> or <code>addressId</code>)</td>
    </tr>
    <tr>
        <td nowrap><code>countryCode</code></td>
        <td nowrap><code>CountryCode</code></td>
        <td>Country code of the Organization's location</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>contacts</code></td>
        <td nowrap><code>[<a href="#createContactFormInput">createContactFormInput</a>!]</code></td>
        <td>Input for an array of contacts</td>
    </tr>
</table>

<span id="createContactFormInput">createContactFormInput</span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>email</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>E-mail address of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>phone</code></td>
        <td nowrap><code>String</code></td>
        <td>Phone number of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Contact is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's <code><a href="./objects.html#organization">Organization</a></code></td>
    </tr>
    <tr>
        <td nowrap><code>userId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's Dosatsu user account</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isPrimaryContact</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Contact is the primary contact or not</td>
    </tr>
</table>

**Return Fields**

Expects to return [Organization](./objects.md#organization)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createOrganization(
                input: {
                    name: "TestOrg"
                    alternativeName: "Tested Organization"
                    isCompany: true
                    description: "Description of Test Org"
                    website: "https://www.test.org.com/"
                    contactId: "f5b7e276-ed0c-4878-a98b-090b981f5f57"
                    parentId: "b8eca652-198a-43a0-b0c3-d8a8f1ac2889"
                    addressId: "97d9b0e7-f680-4cf9-ac07-b2430055dba3"
                    countryCode: "US"
                    customAttribute: {
                        custom1: true
                    }
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
            "createOrganization": {
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
                    "address": "5451 Great America Pkwy, Santa Clara, CA 95054"
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

## updateOrganization

Update an [Organization](./objects.md#organization)

**Inputs**

Input is mandatory for this mutation.

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
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>alternativeName</code></td>
        <td nowrap><code>String</code></td>
        <td>Alternative name of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether the Organization is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>website</code></td>
        <td nowrap><code>String</code></td>
        <td>Website URL of the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>contactId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="./objects.html#contact">Contact</a></code> ID of the primary contact</td>
    </tr>
    <tr>
        <td nowrap><code>parentId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="./objects.html#organization">Organization</a></code> ID of the parent organization</td>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code>String</code></td>
        <td>Address of organization (NOTE: Either use <code>address</code> or <code>addressId</code>)</td>
    </tr>
    <tr>
        <td nowrap><code>addressId</code></td>
        <td nowrap><code>ID</code></td>
        <td><code><a href="../locationManagement/objects.html#address">Address</a></code> ID of the Organization's address. (NOTE: Either use <code>address</code> or <code>addressId</code>)</td>
    </tr>
    <tr>
        <td nowrap><code>countryCode</code></td>
        <td nowrap><code>CountryCode</code></td>
        <td>Country code of the Organization's location</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Organization</td>
    </tr>
    <tr>
        <td nowrap><code>contacts</code></td>
        <td nowrap><code>[<a href="#updateContactFormInput">updateContactFormInput</a>!]</code></td>
        <td>Input for an array of contacts</td>
    </tr>
</table>

<span id="updateContactFormInput">updateContactFormInput</span>

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#contact">Contact</a></td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>email</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>E-mail address of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>phone</code></td>
        <td nowrap><code>String</code></td>
        <td>Phone number of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Contact is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's <code><a href="./objects.html#organization">Organization</a></code></td>
    </tr>
    <tr>
        <td nowrap><code>userId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's Dosatsu user account</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isPrimaryContact</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Contact is the primary contact or not</td>
    </tr>
</table>

**Return Fields**

Expects to return [Organization](./objects.md#organization)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateOrganization(
                input: {
                    id: "4da5fb2b-f91a-4e89-8641-52ff07cb585f"
                    name: "TestOrg2"
                    alternativeName: "Tested Organization2"
                    isCompany: false
                    description: "Description of Test Org2"
                    website: "https://www.test.org2.com/"
                    customAttribute: {
                        custom1: false
                    }
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
            "updateOrganization": {
                "id": "4da5fb2b-f91a-4e89-8641-52ff07cb585f",
                "name": "TestOrg2",
                "alternativeName": "Tested Organization2",
                "isCompany": false,
                "description": "Description of Test Org2",
                "website": "https://www.test.org2.com/",
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
                    "address": "5451 Great America Pkwy, Santa Clara, CA 95054"
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

## deleteOrganization

Delete an [Organization](./objects.md#organization)

**Inputs**

Input is mandatory for this mutation.

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
        mutation {
            deleteOrganization(
                input: {
                    id: "4da5fb2b-f91a-4e89-8641-52ff07cb585f"
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
            "deleteOrganization": {
                "id": "4da5fb2b-f91a-4e89-8641-52ff07cb585f",
                "name": "Test Organization Name"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## createContact

Create a [Contact](./objects.md#contact)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>email</code></td>
        <td nowrap><code>EmailAddress!</code></td>
        <td>E-mail address of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>phone</code></td>
        <td nowrap><code>String</code></td>
        <td>Phone number of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the Contact is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's <code><a href="./objects.html#organization">Organization</a></code></td>
    </tr>
    <tr>
        <td nowrap><code>userId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's Dosatsu user account</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Contact</td>
    </tr>
</table>

**Return Fields**

Expects to return [Contact](./objects.md#contact)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            createContact(
                input: {
                    name: "Another One"
                    description: "Primary contact for someone"
                    email: "another.one@email.com"
                    phone: "+17895551234"
                    isCompany: true
                    organizationId: "4da5fb2b-f91a-4e89-8641-52ff07cb585f"
                    userId: "0bb86e49-9f6c-405d-b592-09fb9ad3fd80"
                    customAttribute: {
                        custom1: true
                    }
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
            "createContact": {
                "id": "e897c83f-49ff-4975-b7e9-42a9b7ad0cc0",
                "name": "Another One",
                "description": "Primary contact for someone",
                "email": "another.one@email.com",
                "phone": "111-111-1111",
                "isCompany": true,
                "organization": {
                    "id": "0bb86e49-9f6c-405d-b592-09fb9ad3fd89",
                    "name": "Test7"
                },
                "user": {
                    "id": "0bb86e49-9f6c-405d-b592-09fb9ad3fd80",
                    "username": "anotherone"
                },
                "customAttribute": {
                    "custom1": true
                },
                "createdBy": {
                    "id": "31713532-68e7-410f-8575-952df9149c77",
                    "username": "username1"
                },
                "updatedBy": null,
                "createdAt": "2021-07-13T00:37:27.300Z",
                "updatedAt": null
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## updateContact

Update a [Contact](./objects.md#contact)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#contact">Contact</a></td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>email</code></td>
        <td nowrap><code>EmailAddress</code></td>
        <td>E-mail address of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>phone</code></td>
        <td nowrap><code>String</code></td>
        <td>Phone number of the Contact</td>
    </tr>
    <tr>
        <td nowrap><code>isCompany</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Whether the Contact is a company or not</td>
    </tr>
    <tr>
        <td nowrap><code>organizationId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's <code><a href="./objects.html#organization">Organization</a></code></td>
    </tr>
    <tr>
        <td nowrap><code>userId</code></td>
        <td nowrap><code>ID</code></td>
        <td>ID of the Contact's Dosatsu user account</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the Contact</td>
    </tr>
</table>

**Return Fields**

Expects to return [Contact](./objects.md#contact)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            updateContact(
                input: {
                    id: "e897c83f-49ff-4975-b7e9-42a9b7ad0cc0"
                    name: "Next One"
                    description: "Secondary contact for someone"
                    email: "next.one@email.com"
                    phone: "+15555555555"
                    isCompany: false
                    userId: "0bb86e49-9f6c-405d-b592-09fb9ad3fd81"
                    customAttribute: {
                        custom1: false
                    }
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
            "updateContact": {
                "id": "e897c83f-49ff-4975-b7e9-42a9b7ad0cc0",
                "name": "Next One",
                "description": "Secondary contact for someone",
                "email": "next.one@email.com",
                "phone": "222-222-2222",
                "isCompany": false,
                "organization": {
                    "id": "0bb86e49-9f6c-405d-b592-09fb9ad3fd80",
                    "name": "Test7"
                },
                "user": {
                    "id": "0bb86e49-9f6c-405d-b592-09fb9ad3fd81",
                    "username": "nextone"
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
                "createdAt": "2021-07-13T00:37:27.300Z",
                "updatedAt": "2021-07-13T00:45:22.212Z"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## deleteContact

Delete a [Contact](./objects.md#contact)

**Inputs**

Input is mandatory for this mutation.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./objects.html#contact">Contact</a></td>
    </tr>
</table>

**Return Fields**

Expects to return [Contact](./objects.md#contact)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        mutation {
            deleteContact(
                input: {
                    id: "e897c83f-49ff-4975-b7e9-42a9b7ad0cc0"
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
            "deleteContact": {
                "id": "e897c83f-49ff-4975-b7e9-42a9b7ad0cc0",
                "name": "Next One"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"
