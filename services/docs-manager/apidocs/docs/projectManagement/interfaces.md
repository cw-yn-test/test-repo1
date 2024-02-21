# Project Interfaces

## Service

Represents a value added service that can be added to a Project.

**Implemented By:**

-   [AirRiskService](./objects.md#airriskservice)
-   [BesideCalibrationService](./objects.md#besidecalibrationservice)
-   [EquipmentAlertsService](./objects.md#equipmentalertsservice)
-   [SpatialIntelligenceService](./objects.md#spatialintelligenceservice)
-   [ResidentialAlertsService](./objects.md#residentialalertsservice)
-   [TrendGraphsService](./objects.md#trendgraphsservice)

### Fields

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Value Added Service</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code><a href="./enums.html#servicenames">ServiceNames!</a></code></td>
        <td>Name of the Value Added Service</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String!</code></td>
        <td>Description of the Value Added Service</td>
    </tr>
</table>

## AccessGroup

Represents a group within a Project.

**Implemented By:**

-   [ManagerProjectGroup](./objects.md#managerprojectgroup)
-   [ParticipantProjectGroup](./objects.md#participantprojectgroup)

### Fields

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the AccessGroup</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the AccessGroup</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the access group</td>
    </tr>
</table>

## GroupService

Represents a [Service](#service) added to an [AccessGroup](#accessgroup)

**Implemented By:**

-   [AirRiskGroupService](./objects.md#airriskgroupservice)
-   [BesideCalibrationGroupService](./objects.md#besidecalibrationgroupservice)
-   [EquipmentAlertsGroupService](./objects.md#equipmentalertsgroupservice)
-   [SpatialIntelligenceGroupService](./objects.md#spatialintelligencegroupservice)
-   [ResidentialAlertsGroupService](./objects.md#residentialalertsgroupservice)
-   [TrendGraphsGroupService](./objects.md#trendgraphsgroupservice)

### Fields

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>service</code></td>
        <td nowrap><code><a href="./interfaces.html#service">Service</a>!</code></td>
        <td>The Value Added Service</td>
    </tr>
    <tr>
        <td nowrap><code>group</code></td>
        <td nowrap><code>[<a href="#accessgroup">AccessGroup</a>!]</code></td>
        <td>The access group the participant is a part of</td>
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