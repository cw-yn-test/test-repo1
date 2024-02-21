# User Queries

## user

Retrieve a [User](./userObjects.md#user).

**Inputs**

Input is required for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the <a href="./userObjects.html#user">user</a></td>
    </tr>
</table>

**Return Fields**

Expects to return a [User](./userObjects.md#user)

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            user(input: { id: "edde9524-7e9e-4c93-b2e0-cc99a291deb0" }) {
                id
                username
                firstName
                lastName
                email
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "user": {
                "id": "31713532-68e7-410f-8575-952df9149c77",
                "username": "buildinga",
                "firstName": "Bob",
                "lastName": "Smith",
                "email": "bob.smith@email.com"
            }
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"

## users

Retrieve all users [ [User](./userObjects.md#user) ].

**Inputs**

Input is optional for this query.

<table>
    <tr>
        <th nowrap>Argument</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>criteria</code></td>
        <td nowrap><code>String</code></td>
        <td>A String contained in username, first or last name, or email</td>
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

Expects to return a list of users: [ [User](./userObjects.md#user) ]

**Example**

!!! example "Sample Input"

    === "GraphQL"
        ```
        {
            users {
                id
                username
                firstName
                lastName
                email
            }
        }
        ```

!!! success "Sample Output"

    ```
    {
        "data": {
            "users": [
                {
                    "id": "31713532-68e7-410f-8575-952df9149c77",
                    "username": "buildinga",
                    "firstName": "Bob",
                    "lastName": "Smith",
                    "email": "bob.smith@email.com"
                },
                {
                    "id": "77feb4f7-b687-4d9b-adbb-b412ae1c4541",
                    "username": "username1"
                    "firstName": "Will",
                    "lastName": "Kane",
                    "email": "will.kane@email.com"
                },
                {
                    "id": "63447ea6-119a-49ee-a9fe-d71ee79a67f9",
                    "username": "username2"
                    "firstName": "James",
                    "lastName": "Chow",
                    "email": "james.chow@email.com"
                }
            ]
        }
    }
    ```

!!! info "How to make plain HTTP [requests](../index.md#making-plain-http-requests)"