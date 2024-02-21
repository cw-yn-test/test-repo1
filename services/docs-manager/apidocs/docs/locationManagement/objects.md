# Location Objects

## Site

Represents a physical location or a building

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Site</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>timezone</code></td>
        <td nowrap><code>String</code></td>
        <td>Timezone of the Site's location, defined by the address</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Is the Site enabled</td>
    </tr>
    <tr>
        <td nowrap><code>area</code></td>
        <td nowrap><code>Float</code></td>
        <td>Area of the Site in square feet</td>
    </tr>
    <tr>
        <td nowrap><code>primaryFunction</code></td>
        <td nowrap><code>String</code></td>
        <td>Main functionality of the Site</td>
    </tr>
    <tr>
        <td nowrap><code>yearBuilt</code></td>
        <td nowrap><code>NonNegativeInt</code></td>
        <td>Year the Site was built</td>
    </tr>
    <tr>
        <td nowrap><code>geoAddress</code></td>
        <td nowrap><code>String</code></td>
        <td>Address of Site</td>
    </tr>
    <tr>
        <td nowrap><code>geoStreet</code></td>
        <td nowrap><code>String</code></td>
        <td>Number and name of the street the Site is located, based on the address</td>
    </tr>
    <tr>
        <td nowrap><code>geoCity</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the city the Site is located, based on the address</td>
    </tr>
    <tr>
        <td nowrap><code>geoState</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the state the Site is located, based on the address</td>
    </tr>
    <tr>
        <td nowrap><code>geoCountry</code></td>
        <td nowrap><code>String</code></td>
        <td>Name of the country the Site is located, based on the address.</td>
    </tr>
    <tr>
        <td nowrap><code>geoCoordLat</code></td>
        <td nowrap><code>Float</code></td>
        <td>Latitude coordinate of the Site, based on the address.</td>
    </tr>
    <tr>
        <td nowrap><code>geoCoordLon</code></td>
        <td nowrap><code>Float</code></td>
        <td>Longitude coordinate of the Site, based on the address.</td>
    </tr>
    <tr>
        <td nowrap><code>uploads</code></td>
        <td nowrap><code>[ <a href="../objectManagement/objects.html#fileupload">FileUpload</a> ]</code></td>
        <td>Uploaded files relating to this Site</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code>[ <a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a> ]</code></td>
        <td>List of equipment that can be found at this site</td>
    </tr>
    <tr>
        <td nowrap><code>organization</code></td>
        <td nowrap><code><a href="../organizationManagement/objects.html#organization">Organization</a></code></td>
        <td>The organization this site belongs to</td>
    </tr>
    <tr>
        <td nowrap><code>linkedSites</code></td>
        <td nowrap><code>[<a href="#linkedsite">LinkedSite</a>]</code></td>
        <td>The LinkedSites associated with this site</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The user who last modified this entry</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>
</table>

## Space

Represents a floor, room, or area within a [Site](#site)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Space</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Space</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Space</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>Is the Space enables</td>
    </tr>
    <tr>
        <td nowrap><code>area</code></td>
        <td nowrap><code>Float</code></td>
        <td>Area of the Space in square feet</td>
    </tr>
    <tr>
        <td nowrap><code>volume</code></td>
        <td nowrap><code>Float</code></td>
        <td>Volume of the Space</td>
    </tr>
    <tr>
        <td nowrap><code>type</code></td>
        <td nowrap><code><a href="./enums.html#spacetype">SpaceType</a>!</code></td>
        <td>The type of space</td>
    </tr>
    <tr>
        <td nowrap><code>site</code></td>
        <td nowrap><code><a href="#site">Site</a>!</code></td>
        <td>The Site this space belongs to</td>
    </tr>
    <tr>
        <td nowrap><code>parentSpace</code></td>
        <td nowrap><code><a href="#space">Space</a></code></td>
        <td>The immediate parent space. This value will be null for a top-level space</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The user who last modified this entry</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code>[ <a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a> ]</code></td>
        <td>List of equipment that can be found at this space</td>
    </tr>
</table>

## LinkedSite

Represents a location from external systems. For example: GPF Cloud or Kirei Watch.

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the linked site</td>
    </tr>
    <tr>
        <td nowrap><code>externalId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID from the external system</td>
    </tr>
    <tr>
        <td nowrap><code>externalName</code></td>
        <td nowrap><code>String</code></td>
        <td>Name from the external system</td>
    </tr>
    <tr>
        <td nowrap><code>ioConnection</code></td>
        <td nowrap><code><a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IOConnection</a>!</code></td>
        <td>
            The IO Connection which is connected to the external system
        </td>
    </tr>
    <tr>
        <td nowrap><code>site</code></td>
        <td nowrap><code><a href="#site">Site</a></code></td>
        <td>References assigned site entity within Dosatsu</td>
    </tr>
    <tr>
        <td nowrap><code>customAttribute</code></td>
        <td nowrap><code>JSONObject</code></td>
        <td>Additional information about the linked site</td>
    </tr>
    <tr>
        <td nowrap><code>removed</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Whether the linked site is soft deleted</td>
    </tr>
    <tr>
        <td nowrap><code>createdBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>The user who created this entry</td>
    </tr>
    <tr>
        <td nowrap><code>updatedBy</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a></code></td>
        <td>The user who last modified this entry</td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was created</td>
    </tr>
    <tr>
        <td nowrap><code>updatedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>UTC date-time string representing when this entry was updated</td>
    </tr>
</table>

## Address

Represents an address location utilized in [Site](#site) and [Organization](../organizationManagement/objects.md#Organization).

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the address</td>
    </tr>
    <tr>
        <td nowrap><code>address</code></td>
        <td nowrap><code>String!</code></td>
        <td>Defined address</td>
    </tr>
    <tr>
        <td nowrap><code>formattedAddress</code></td>
        <td nowrap><code>String</code></td>
        <td>Formatted address derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>street</code></td>
        <td nowrap><code>String</code></td>
        <td>Address street derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>city</code></td>
        <td nowrap><code>String</code></td>
        <td>Address city derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>state</code></td>
        <td nowrap><code>String</code></td>
        <td>Address state derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>zipcode</code></td>
        <td nowrap><code>String</code></td>
        <td>Address zipcode derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>timezone</code></td>
        <td nowrap><code>String</code></td>
        <td>Address timezone derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>country</code></td>
        <td nowrap><code>String</code></td>
        <td>Address country derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>longitude</code></td>
        <td nowrap><code>Float</code></td>
        <td>Address longitude derived from the defined address</td>
    </tr>
    <tr>
        <td nowrap><code>latitude</code></td>
        <td nowrap><code>Float</code></td>
        <td>Address latitude derived from the defined address</td>
    </tr>
</table>