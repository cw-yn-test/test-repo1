# Project Objects

## Project

Represents a project

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
        <th nowrap>Inputs</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Project</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Project</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Project</td>
    </tr>
    <tr>
        <td nowrap><code>startsAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this project will start</td>
    </tr>
    <tr>
        <td nowrap><code>endsAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this project will end</td>
    </tr>
    <tr>
        <td nowrap><code>managers</code></td>
        <td nowrap><code>[<a href="../userManagement/userObjects.html#user">User</a>!</code>]</td>
        <td>List of project managers</td>
    </tr>
    <tr>
        <td nowrap><code>groups</code></td>
        <td nowrap><code>[<a href="./interfaces.html#accessgroup">AccessGroup</a>!]</code></td>
        <td>List of associated access groups</td>
        <td>
            <table>
                <tr>
                    <td>page</td>
                    <td>Int</td>
                    <td>Pagination number</td>
                </tr>
                <tr>
                    <td>rowsPerPage</td>
                    <td>Int</td>
                    <td>How many records per page</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>String</td>
                    <td>Name of the access group. Also supports partial matching.</td>
                </tr>
            </table>
        </td>
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

## ParticipantProject

Represents a participant's project

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Unique ID representing the Project</td>
    </tr>
    <tr>
        <td nowrap><code>name</code></td>
        <td nowrap><code>String!</code></td>
        <td>Name of the Project</td>
    </tr>
    <tr>
        <td nowrap><code>description</code></td>
        <td nowrap><code>String</code></td>
        <td>Description of the Project</td>
    </tr>
    <tr>
        <td nowrap><code>startsAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this project will start</td>
    </tr>
    <tr>
        <td nowrap><code>endsAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>UTC date-time string representing when this project will end</td>
    </tr>
</table>

## ManagerProjectGroup

Represents the manager's access rights to a group

Implements [AccessGroup](./interfaces.md#accessgroup)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
        <th nowrap>Inputs</th>
    </tr>
    <tr>
        <td nowrap><code>project</code></td>
        <td nowrap><code><a href="#project">Project</a>!</code></td>
        <td>The project the access group is a part of</td>
    </tr>
    <tr>
        <td nowrap><code>parentGroup</code></td>
        <td nowrap><code>AccessGroup</code></td>
        <td>The parent access group if this is a child of that group</td>
    </tr>
    <tr>
        <td nowrap><code>participants</code></td>
        <td nowrap><code>[<a href="#participant">Participant</a>!]</code></td>
        <td>List of group participants</td>
        <td>
            <table>
                <tr>
                    <td>page</td>
                    <td>Int</td>
                    <td>Pagination number</td>
                </tr>
                <tr>
                    <td>rowsPerPage</td>
                    <td>Int</td>
                    <td>How many records per page</td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td nowrap><code>equipments</code></td>
        <td nowrap><code>[<a href="#groupequipment">GroupEquipment</a>!]</code></td>
        <td>List of group equipments</td>
        <td>
            <table>
                <tr>
                    <td>page</td>
                    <td>Int</td>
                    <td>Pagination number</td>
                </tr>
                <tr>
                    <td>rowsPerPage</td>
                    <td>Int</td>
                    <td>How many records per page</td>
                </tr>
            </table>
        </td>
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

## ParticipantProjectGroup

Represents the participant's access rights to a group

Implements [AccessGroup](./interfaces.md#accessgroup)

Has these additional fields in addition to the above:


<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>canWrite</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Write permissions for participant</td>
    </tr>
    <tr>
        <td nowrap><code>hasAlert</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>
            Whether or not any children groups with assigned <code><a href="#equipmentalertsgroupservice">EquipmentAlertsGroupService</a></code> or <code><a href="#residentialalertsgroupservice">ResidentialAlertsGroupService</a></code> have any alerts to show. If the group or its children don't have any related services assigned, it will return `null`. Will only work properly if the entire group hierarchy has 100 services or less.
        </td>
    </tr>
    <tr>
        <td nowrap><code>project</code></td>
        <td nowrap><code><a href="#participantproject">ParticipantProject</a>!</code></td>
        <td>The project the access group is a part of</td>
    </tr>
</table>

## Participant

Represents a participant within an access group

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>group</code></td>
        <td nowrap><code>[<a href="./interfaces.html#accessgroup">AccessGroup</a>!]</code></td>
        <td>The access group the participant is a part of</td>
    </tr>
    <tr>
        <td nowrap><code>user</code></td>
        <td nowrap><code><a href="../userManagement/userObjects.html#user">User</a>!</code></td>
        <td>User information</td>
    </tr>
    <tr>
        <td nowrap><code>canWrite</code></td>
        <td nowrap><code>Boolean!</code></td>
        <td>Write permissions for participant.</td>
    </tr>
</table>

## GroupEquipment

Represents an equipment assigned to an access group

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>group</code></td>
        <td nowrap><code><a href="./interfaces.html#accessgroup">AccessGroup</a>!</code></td>
        <td>The access group the participant is a part of</td>
    </tr>
    <tr>
        <td nowrap><code>equipment</code></td>
        <td nowrap><code><a href="../equipmentManagement/equipmentObjects.html#equipment">Equipment</a>!</code></td>
        <td>Equipment information</td>
    </tr>
</table>

## AirRiskService

Represents the spatial interpolation service

Implements [Service](./interfaces.md#service)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>viewTypes</code></td>
        <td nowrap>[<code><a href="./enums.html#airriskserviceviewtypes">AirRiskServiceViewTypes</a>!]!</code></td>
        <td>List of supported view types</td>
    </tr>
</table>

## AirRiskGroupService

Represents information about an [AirRiskService](#airriskservice) added to an [AccessGroup](./interfaces.md#accessgroup)

Implements [GroupService](./interfaces.md#groupservice)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>service</code></td>
        <td nowrap><code><a href="#airriskservice">AirRiskService</a>!</code></td>
        <td>Assigned service</td>
    </tr>
    <tr>
        <td nowrap><code>floorplan</code></td>
        <td nowrap><code><a href="../objectManagement/objects.html#fileupload">FileUpload</a></code></td>
        <td>Floorplan image of the location assigned to group</td>
    </tr>
    <tr>
        <td nowrap><code>viewType</code></td>
        <td nowrap><code><a href="./enums.html#airriskserviceviewtypes">AirRiskServiceViewTypes</a>!</code></td>
        <td>Assigned view type</td>
    </tr>
    <tr>
        <td nowrap><code>xyCoordinates</code></td>
        <td nowrap><code>[<a href="#airriskcoordinates">AirRiskCoordinates</a>]!</code></td>
        <td>List of equipment coordinates</td>
    </tr>
</table>

## AirRiskCoordinates

Represents a list of equipments and their coordinates within an [AirRiskGroupService](#airriskgroupservice)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>id</code></td>
        <td nowrap><code>ID!</code></td>
        <td>Reference to the equipment</td>
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

## BesideCalibrationService

Represents the beside CO2 calibration service

Implements [Service](./interfaces.md#service)

## BesideCalibrationGroupService

Represents information about an [BesideCalibrationService](#besidecalibrationservice) added to an [AccessGroup](./interfaces.md#accessgroup)

Implements [GroupService](./interfaces.md#groupservice)

## EquipmentAlertsService

Represents the equipment alerts service

Implements [Service](./interfaces.md#service)

## EquipmentAlertsGroupService

Represents information about an [EquipmentAlertsService](#equipmentalertsservice) added to an [AccessGroup](./interfaces.md#accessgroup)

Implements [GroupService](./interfaces.md#groupservice)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>service</code></td>
        <td nowrap><code><a href="#equipmentalertsservice">EquipmentAlertsService</a>!</code></td>
        <td>Assigned service</td>
    </tr>
    <tr>
        <td nowrap><code>enabled</code></td>
        <td nowrap><code>Boolean</code>!</td>
        <td>Whether or not the service is active. Default is true.</td>
    </tr>
    <tr>
        <td nowrap><code>secondsAfterStoppedReporting</code>!</td>
        <td nowrap><code>Int</code></td>
        <td>How many seconds to wait until an alert is sent. Default is 1800.</td>
    </tr>
    <tr>
        <td nowrap><code>alertSentAt</code></td>
        <td nowrap><code>UnixTimestamp</code></td>
        <td>UNIX Timestamp of when the alert was sent when any of the equipment stopped reporting.</td>
    </tr>
</table>

## SpatialIntelligenceService

Represents the Spatial Intelligence service

Implements [Service](./interfaces.md#service)

## SpatialIntelligenceGroupService

Represents information about an [SpatialIntelligenceService](#spatialintelligenceservice) added to an [AccessGroup](./interfaces.md#accessgroup)

Implements [GroupService](./interfaces.md#groupservice)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>iaqThresholds</code></td>
        <td nowrap><code><a href="#spatialintelligenceiaqthresholds">SpatialIntelligenceIAQThresholds</a></code></td>
        <td>Ceiling and floors for iaq sensor data points</td>
    </tr>
    <tr>
        <td nowrap><code>pm25Equipment</code></td>
        <td nowrap><code><a href="#spatialintelligencepm25equipment">pm25Equipment</a></code></td>
        <td>Ceiling and floors for iaq sensor data points</td>
    </tr>
</table>

## SpatialIntelligenceIAQThresholds

Represents IAQ sensor thresholds within a [SpatialIntelligenceGroupService](#spatialintelligencegroupservice)

<table>
    <tr>
        <th nowrap>Field</th>
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

## SpatialIntelligencePM25Equipment

Represents the indoor and outdoor PM2.5 equipment reference within a [SpatialIntelligenceGroupService](#spatialintelligencegroupservice)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>indoor</code></td>
        <td nowrap><code>ID</code></td>
        <td>Indoor equipment ref to read PM2.5 data from</td>
    </tr>
    <tr>
        <td nowrap><code>outdoor</code></td>
        <td nowrap><code>ID</code></td>
        <td>Outdoor equipment ref to read PM2.5 data from</td>
    </tr>
</table>

## ResidentialAlertsService

Represents the Residential Alerts service

Implements [Service](./interfaces.md#service)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>alertTypes</code></td>
        <td nowrap>[<code><a href="./enums.html#residentialalertsservicealerttypes">ResidentialAlertsServiceAlertTypes</a>!]!</code></td>
        <td>List of supported view types</td>
    </tr>
</table>

## ResidentialAlertsGroupService

Represents information about an [ResidentialAlertsService](#residentialalertsservice) added to an [AccessGroup](./interfaces.md#accessgroup)

Implements [GroupService](./interfaces.md#groupservice)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>enabledAlerts</code></td>
        <td nowrap>[<code><a href="./enums.html#residentialalertsservicealerttypes">ResidentialAlertsServiceAlertTypes</a>!]!</code></td>
        <td>List of supported view types</td>
    </tr>
    <tr>
        <td nowrap><code>alertInfo</code></td>
        <td nowrap><code><a href="#residentialalertsinfo">ResidentialAlertsInfo</a></code></td>
        <td>Information regarding each alert type</td>
    </tr>
</table>

## ResidentialAlertsInfo

Represents information for all [ResidentialAlertsServiceAlertTypes](./enums.md#residentialalertsservicealerttypes)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>DrainpipeClogged</code></td>
        <td nowrap><code><a href="#residentialalertstypeinfo">ResidentialAlertsTypeInfo</a></code></td>
        <td>Info for <code>DrainpipeClogged</code></td>
    </tr>
    <tr>
        <td nowrap><code>HeatingIssue</code></td>
        <td nowrap><code><a href="#residentialalertstypeinfo">ResidentialAlertsTypeInfo</a></code></td>
        <td>Info for <code>HeatingIssue</code></td>
    </tr>
    <tr>
        <td nowrap><code>CoolingIssue</code></td>
        <td nowrap><code><a href="#residentialalertstypeinfo">ResidentialAlertsTypeInfo</a></code></td>
        <td>Info for <code>CoolingIssue</code></td>
    </tr>
    <tr>
        <td nowrap><code>LowTemp</code></td>
        <td nowrap><code><a href="#residentialalertstypeinfo">ResidentialAlertsTypeInfo</a></code></td>
        <td>Info for <code>LowTemp</code></td>
    </tr>
    <tr>
        <td nowrap><code>HighTemp</code></td>
        <td nowrap><code><a href="#residentialalertstypeinfo">ResidentialAlertsTypeInfo</a></code></td>
        <td>Info for <code>HighTemp</code></td>
    </tr>
</table>

## ResidentialAlertsTypeInfo

Represents information for individual [ResidentialAlertsServiceAlertTypes](./enums.md#residentialalertsservicealerttypes)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>configuration</code></td>
        <td nowrap><code><a href="#residentialalertstypeconfiguration">ResidentialAlertsTypeConfiguration</a></code></td>
        <td>Configuration for the alert</td>
    </tr>
    <tr>
        <td nowrap><code>latestAlerts</code></td>
        <td nowrap><code><a href="#residentialalertstypelatestalerts">ResidentialAlertsTypeLatestAlerts</a></code></td>
        <td>Information about the latest sent alert</td>
    </tr>
</table>

## ResidentialAlertsTypeConfiguration

Represents the configuration for individual [ResidentialAlertsServiceAlertTypes](./enums.md#residentialalertsservicealerttypes)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
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
            The minimum time in seconds the alarm condition needs to persist before triggering the alert. For ex., <code>300</code> if clogging to persist minimum 5 minutes before triggering the alarm.
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

## ResidentialAlertsTypeLatestAlerts

Represents latest alert information for each of the [ResidentialAlertsServiceAlertTypes](./enums.md#residentialalertsservicealerttypes)

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>alertOn</code></td>
        <td nowrap><code>Boolean</code></td>
        <td>
            Whether the alert condition is currently detected or not. <code>true</code> means it is currently detected. <code>false</code> means there is no alert.
        </td>
    </tr>
    <tr>
        <td nowrap><code>lastMonitoredAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>
            Last time the time-series data was monitored for the alarm condition. This information helps us to not repeat looking at the same data twice.
        </td>
    </tr>
    <tr>
        <td nowrap><code>detectedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>
            Time when the current alarm condition was first detected before triggering the alert. This condition needs to persist for <code>minimumSeconds</code> before we trigger the alert.
        </td>
    </tr>
    <tr>
        <td nowrap><code>lastDetectedAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>
            Time when the current alarm condition was last detected. If this is <code>minimumSeconds</code> after the <code>detectedAt</code> the alert is triggered.
        </td>
    </tr>
    <tr>
        <td nowrap><code>lastAlertSentAt</code></td>
        <td nowrap><code>DateTime</code></td>
        <td>
            When was the last time when this alert was triggered
        </td>
    </tr>
</table>

## TrendGraphsService

Represents the Trend Graphs service

Implements [Service](./interfaces.md#service)

## TrendGraphsGroupService

Represents information about a [TrendGraphsService](#trendgraphsservice) added to an [AccessGroup](./interfaces.md#accessgroup)

Implements [GroupService](./interfaces.md#groupservice)

Has these additional fields in addition to the above:

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>enabledGraphs</code></td>
        <td nowrap>[<code>String!]</code></td>
        <td>List of enabled graphs. Corresponds to <code>name</code> in a <a href="#trendgraphset">TrendGraphSet</a></td>
    </tr>
    <tr>
        <td nowrap><code>trendGraphSets</code></td>
        <td nowrap><code><a href="#trendgraphset">TrendGraphSet</a></code></td>
        <td>A list of all trend graph sets</td>
    </tr>
</table>

## TrendGraphSet

Represents a grouping of trend graphs within a [TrendGraphsGroupService](#trendgraphsgroupservice)

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
        <td nowrap><code>[<a href="#trendgraph">TrendGraph</a>]</code></td>
        <td>A list of all trend graphs within the set</td>
    </tr>
</table>

## TrendGraph

Represents a single trend graph within a [TrendGraphSet](#trendgraphset)

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
        <td nowrap><code><a href="#trendgraphyaxis">TrendGraphYAxis</a>!</code></td>
        <td>Configuration for the y axis of the graph</td>
    </tr>
    <tr>
        <td nowrap><code>plots</code></td>
        <td nowrap><code>[<a href="#trendgraphplot">TrendGraphPlot</a>!]</code></td>
        <td>List of configurations for plotting individual equipment data</td>
    </tr>
</table>

## TrendGraphYAxis

Represents the y axis configuration for a [TrendGraph](#trendgraph)

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

## TrendGraphPlot

Represents the configuration for plotting individual equipment data for a [TrendGraph](#trendgraph)

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