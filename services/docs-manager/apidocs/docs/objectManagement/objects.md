# Object Objects

## FileUpload

Represents an uploaded object

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>uri</code></td>
        <td nowrap><code>String!</code></td>
        <td>Bucket the object is stored in</td>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the object</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Object name</td>
    </tr>
    <tr>
        <td nowrap><code>entityId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the entity. For example, a Site ID, if this is an image of that Site.</td>
    </tr>
    <tr>
        <td nowrap><code>entityType</code></td>
        <td nowrap><code>String</code></td>
        <td>Type representing the entity. For example, `site` if this is an image of that Site.</td>
    </tr>
    <tr>
        <td nowrap><code>mimetype</code></td>
        <td nowrap><code>String!</code></td>
        <td>mimetype of the object</td>
    </tr>
    <tr>
        <td nowrap><code>bytes</code></td>
        <td nowrap><code>Int!</code></td>
        <td>Size of the object</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the object</td>
    </tr>
    <tr>
        <td nowrap><code>uploadComplete</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>The upload status</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who uploaded the object</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who last modified the object</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>Time the object was uploaded</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>Time the object was uploaded</td>
    </tr>
</table>
