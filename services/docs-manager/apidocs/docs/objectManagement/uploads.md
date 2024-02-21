# Uploads API

Uploads API manages the file uploads and its meta information.

!!! info "Note that the GraphQL Object `FileUpload` returns a field called `id`, which is returned as `objectInfoId` when making REST API calls described on this page"

## POST

Allows you to upload multiple files.

<table>
    <th><b>Supported:</b></th>
    <th></th>
    <tr>
        <td nowrap><b>File Types</b></td>
        <td><code>text/plain</code>, <code>image/jpeg</code>, <code>image/jpg</code>, <code>image/png</code>, <code>image/gif</code>, <code>image/bmp</code>, <code>image/tif</code>, <code>image/tiff</code>, <code>application/pdf</code>, <code>image/svg+xml</code></td>
    </tr>
    <tr>
        <td nowrap><b>Maximum File Size</b></td>
        <td>50 MB</td>
    </tr>
    <tr>
        <td nowrap><b>Maximum Number of Files</b></td>
        <td>10</td>
    </tr>
</table>

##### REQUEST

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>http://test1.daikinlab.com/api/v1/uploads</code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>POST</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td nowrap><code>Content-Type</code></td>
                    <td><code>String</code></td>
                    <td><code>application/json</code></td>
                </tr>
                <tr>
                    <td nowrap><code>Authorization</code></td>
                    <td><code>String</code></td>
                    <td><em>JWT Token</em></td>
                </tr>
                <tr>
                    <td nowrap><code>entityId</code></td>
                    <td><code>String</code></td>
                    <td>
                        <em>ID of the entity for which this Object is uploaded.</br>
                        For example, a <a href="../locationManagement/objects.html#site">Site</a> ID, if this is an image of that Site.</em>
                    </td>
                </tr>
                <tr>
                    <td nowrap><code>entityType</code></td>
                    <td><code>String</code></td>
                    <td>
                        <em>Type of the entity for which this Object is uploaded.</br>
                        For example, `site`, if this is an image of that Site.</em>
                    </td>
                </tr>
                <tr>
                    <td nowrap><code>uri</code></td>
                    <td><code>String</code></td>
                    <td><em>Bucket the Object will be stored in.</em></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td nowrap><b>Form-Data</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td><code>files</code></td>
                    <td><code>File</code></td>
                    <td><em>Files to upload.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### RESPONSE

!!! success "Sample Response"

    ```
    [
        {
            "uri": "building",
            "objectInfoId": "b2617b72-866e-4c25-807b-c7da1ec8020b",
            "name": "Building2.png",
            "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
            "entityType": "site",
            "mimetype": "image/png",
            "bytes": 1564225,
            "createdBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            }
        },
        {
            "uri": "building",
            "objectInfoId": "edc95ed9-8739-4f9b-bb84-3b4f44857860",
            "name": "Building3.png",
            "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
            "entityType": "site",
            "mimetype": "image/png",
            "bytes": 924708,
            "createdBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            }
        },
        {
            "uri": "building",
            "objectInfoId": "f259ca07-7360-400f-9a9d-4e3cadf1e50f",
            "name": "Building4.png",
            "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
            "entityType": "site",
            "mimetype": "image/png",
            "bytes": 1101239,
            "createdBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            }
        }
    ]
    ```

!!! info "Response Codes"

    <table>
        <th>Code</th>
        <th>Description</th>
        <tr>
            <td>201</td>
            <td>Uploaded successfully</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request (<code>UNSUPPORTED_OBJECT</code>, <code>OBJECT_STORAGE_ERROR</code>, <code>UPLOAD_COUNT_EXCEEDED</code>)</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized (<code>INVALID_JWT_TOKEN</code>)</td>
        </tr>
    </table>

## GET

### GET all

Retrieve a list of all the uploads for the specified entity.</br>
For example, if you have 10 Objects uploaded on a [Site](../locationManagement/objects.md#site), it would return the list of Objects for the specified Site reference.

##### REQUEST

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>http://test1.daikinlab.com/api/v1/uploads</code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>GET</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td nowrap><code>Content-Type</code></td>
                    <td><code>String</code></td>
                    <td><code>application/json</code></td>
                </tr>
                <tr>
                    <td nowrap><code>Authorization</code></td>
                    <td><code>String</code></td>
                    <td><em>JWT Token</em></td>
                </tr>
                <tr>
                    <td nowrap><code>entityId</code></td>
                    <td><code>String</code></td>
                    <td>
                        <em>ID of the entity for which this Object is uploaded.</br>
                        For example, a <a href="../locationManagement/objects.html#site">Site</a> ID, if this is an image of that Site.</em>
                    </td>
                </tr>
                <tr>
                    <td nowrap><code>uri</code></td>
                    <td><code>String</code></td>
                    <td><em>Bucket the Object is stored in.</em></td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td nowrap><b>Query Parameters</b></td>
        <td>
            Optional:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td><code>page</code></td>
                    <td><code>Integer</code></td>
                    <td><em>Number of the page to show.</em></td>
                </tr>
                <tr>
                    <td><code>rows</code></td>
                    <td><code>Integer</code></td>
                    <td><em>Number of rows per page.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### RESPONSE

!!! success "Sample Response"

    ```
    [
        {
            "uri": "building",
            "objectInfoId": "b2617b72-866e-4c25-807b-c7da1ec8020b",
            "name": "Building2.png",
            "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
            "entityType": "site",
            "mimetype": "image/png",
            "bytes": 1564225,
            "description": "This is image of site",
            "uploadComplete": true,
            "createdBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            },
            "updatedBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            },
            "createdAt": "2020-05-14T21:11:50.566Z",
            "updatedAt": "2020-05-14T21:12:00.443Z"
        },
        {
            "uri": "building",
            "objectInfoId": "edc95ed9-8739-4f9b-bb84-3b4f44857860",
            "name": "Building3.png",
            "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
            "entityType": "site",
            "mimetype": "image/png",
            "bytes": 924708,
            "description": "This is image of site",
            "uploadComplete": true,
            "createdBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            },
            "updatedBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            },
            "createdAt": "2020-05-14T21:11:50.566Z",
            "updatedAt": "2020-05-14T21:12:00.439Z"
        },
        {
            "uri": "building",
            "objectInfoId": "f259ca07-7360-400f-9a9d-4e3cadf1e50f",
            "name": "Building4.png",
            "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
            "entityType": "site",
            "mimetype": "image/png",
            "bytes": 1101239,
            "description": "This is image of site",
            "uploadComplete": true,
            "createdBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            },
            "updatedBy": {
                "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
            },
            "createdAt": "2020-05-14T21:11:50.566Z",
            "updatedAt": "2020-05-14T21:12:00.439Z"
        }
    ]
    ```

!!! info "Response Codes"

    <table>
        <th>Code</th>
        <th>Description</th>
        <tr>
            <td>200</td>
            <td>Successful Retrieval</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized (<code>INVALID_JWT_TOKEN</code>)</td>
        </tr>
    </table>

### GET by ID

Retrieve the information of the Object by the specified ID.

##### REQUEST

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>http://test1.daikinlab.com/api/v1/uploads/<b>{id}</b></code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>GET</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td nowrap><code>Content-Type</code></td>
                    <td><code>String</code></td>
                    <td><code>application/json</code></td>
                </tr>
                <tr>
                    <td nowrap><code>Authorization</code></td>
                    <td><code>String</code></td>
                    <td><em>JWT Token</em></td>
                </tr>
            </table>
    </tr>
    <tr>
        <td nowrap><b>Path</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td><code>id</code></td>
                    <td><code>String</code></td>
                    <td><em>ID of the Object.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### RESPONSE

!!! success "Sample Response"

    ```
    {
        "uri": "building",
        "objectInfoId": "b2617b72-866e-4c25-807b-c7da1ec8020b",
        "name": "Building2.png",
        "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
        "entityType": "site",
        "mimetype": "image/png",
        "bytes": 1564225,
        "description": "This is image of site",
        "uploadComplete": true,
        "createdBy": {
            "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
        },
        "updatedBy": {
            "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
        },
        "createdAt": "2020-05-13T23:58:15.829Z",
        "updatedAt": "2020-05-13T23:58:23.858Z"
    }
    ```

!!! info "Response Codes"

    <table>
        <th>Code</th>
        <th>Description</th>
        <tr>
            <td>200</td>
            <td>Successfully retrieve the Object by ID</td>
        </tr>
        <tr>
            <td>400</td>
            <td>Bad Request (<code>INVALID_OBJECT_ID</code>)</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized (<code>INVALID_JWT_TOKEN</code>)</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found (<code>NOT_FOUND_OBJECT_ID</code>)</td>
        </tr>
    </table>

## DELETE

Removes the specified Object and relative information.

##### REQUEST

<table>
    <tr>
        <td nowrap><b>URI</b></td>
        <td><code>http://test1.daikinlab.com/api/v1/uploads/<b>{id}</b></code></td>
    </tr>
    <tr>
        <td nowrap><b>Method</b></td>
        <td><code>DELETE</code></td>
    </tr>
    <tr>
        <td nowrap><b>Headers</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td nowrap><code>Content-Type</code></td>
                    <td><code>String</code></td>
                    <td><code>application/json</code></td>
                </tr>
                <tr>
                    <td nowrap><code>Authorization</code></td>
                    <td><code>String</code></td>
                    <td><em>JWT Token</em></td>
                </tr>
            </table>
    </tr>
    <tr>
        <td nowrap><b>Path</b></td>
        <td>
            Required:</br>
            <table>
                <th>Key</th>
                <th>Type</th>
                <th>Value</th>
                <tr>
                    <td><code>id</code></td>
                    <td><code>String</code></td>
                    <td><em>ID of the Object.</em></td>
                </tr>
            </table>
        </td>
    </tr>
</table>

##### RESPONSE

!!! success "Sample Response"

    ```
    {
        "uri": "building",
        "objectInfoId": "b2617b72-866e-4c25-807b-c7da1ec8020b",
        "name": "Building2.png",
        "entityId": "3f15b7cc-f379-4de7-98af-c3b6e036d61d",
        "entityType": "site",
        "mimetype": "image/png",
        "bytes": 1564225,
        "description": "This is image of site",
        "uploadComplete": true,
        "createdBy": {
            "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
        },
        "updatedBy": {
            "id": "6702822a-9ccc-52ee-9bcb-ef28aa3be838"
        },
        "createdAt": "2020-05-13T23:58:15.829Z",
        "updatedAt": "2020-05-13T23:58:23.858Z"
    }
    ```

!!! info "Response Codes"

    <table>
        <th>Code</th>
        <th>Description</th>
        <tr>
            <td>200</td>
            <td>Successful retrieval</td>
        </tr>
        <tr>
            <td>401</td>
            <td>Unauthorized (<code>INVALID_JWT_TOKEN</code>)</td>
        </tr>
        <tr>
            <td>404</td>
            <td>Not Found (<code>NOT_FOUND_OBJECT_ID</code>)</td>
        </tr>
    </table>
