# Project Enums

## ServiceNames

List of available [Services](./interfaces.md#service)

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>INDOOR_AIR_RISK_VISUALIZATION</code></td>
        <td>Reference to <a href="./objects.html#airriskservice">AirRiskService</a></td>
    </tr>
    <tr>
        <td nowrap><code>BESIDE_CO2_SENSOR_CALIBRATION</code></td>
        <td>Reference to <a href="./objects.html#besidecalibrationservice">BesideCalibratonService</a></td>
    </tr>
    <tr>
        <td nowrap><code>EQUIPMENT_ALERTS</code></td>
        <td>Reference to <a href="./objects.html#equipmentalertsservice">EquipmentAlertsService</a></td>
    </tr>
    <tr>
        <td nowrap><code>SPATIAL_INTELLIGENCE</code></td>
        <td>Reference to <a href="./objects.html#spatialintelligenceservice">SpatialIntelligenceService</a></td>
    </tr>
    <tr>
        <td nowrap><code>RESIDENTIAL_ALERTS</code></td>
        <td>Reference to <a href="./objects.html#residentialalertsservice">ResidentialAlertsService</a></td>
    </tr>
    <tr>
        <td nowrap><code>TREND_GRAPHS</code></td>
        <td>Reference to <a href="./objects.html#trendgraphsservice">TrendGraphsService</a></td>
    </tr>
</table>

## AirRiskServiceViewTypes

List of view types for [AirRiskService](./objects.md#airriskservice)

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>SPATIAL_INTERPOLATION</code></td>
        <td>View which supports a spatial interpolation graphic</td>
    </tr>
      <tr>
        <td nowrap><code>FLOOR_PLAN</code></td>
        <td>View which supports a floorplan graphic</td>
    </tr>
</table>

## ResidentialAlertsServiceAlertTypes

List of view types for [ResidentialAlertsService](./objects.md#residentialalertsservice)

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>DRAINPIPE_CLOGGED</code></td>
        <td>Draipipe clog detected</td>
    </tr>
    <tr>
        <td nowrap><code>HIGH_TEMP</code></td>
        <td>Unusually high temperature detected</td>
    </tr>
    <tr>
        <td nowrap><code>LOW_TEMP</code></td>
        <td>Unusually low temperature detected</td>
    </tr>
    </tr>
    <tr>
        <td nowrap><code>COOLING_ISSUE</code></td>
        <td>Supply air is not cooling sufficiently compared to the return air</td>
    </tr>
    <tr>
        <td nowrap><code>HEATING_ISSUE</code></td>
        <td>Supply air is not heating sufficiently compared to the return air</td>
    </tr>
</table>

## TrendGraphTypes

List of supported graph types for [TrendGraph](./objects.md#trendgraph)

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>TIMESERIES</code></td>
        <td>A graph that visualizes one or more equipment data. X axis always refers to `observedAt` timestamp.</td>
    </tr>
</table>

## ParticipantGroupsOrderBy

The supported orderBy values for searching for [ParticipantProjectGroup](./objects.md#participantprojectgroup)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>GROUP_NAME_ASC</code></td>
        <td>Sort in ascending order by the group's name</td>
    </tr>
    <tr>
        <td nowrap><code>GROUP_NAME_DESC</code></td>
        <td>Sort in descending order by the group's name</td>
    </tr>
    <tr>
        <td nowrap><code>GROUP_ID_ASC</code></td>
        <td>Sort in ascending order by the group's ID</td>
    </tr>
    <tr>
        <td nowrap><code>GROUP_ID_DESC</code></td>
        <td>Sort in descending order by the group's ID</td>
    </tr>
</table>

## ProjectsOrderBy

The supported orderBy values for searching for [Project](./objects.md#project)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the project's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the project's name</td>
    </tr>
</table>

## AccessGroupsOrderBy

The supported orderBy values for searching for [Project](./objects.md#project)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the project's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the project's name</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the project was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the project was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the project was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the project was most recently updated</td>
    </tr>
</table>

## GroupEquipmentsOrderBy

The supported orderBy values for searching for [GroupEquipment](./objects.md#groupequipment)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Group Equipment was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Group Equipment was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Group Equipment was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Group Equipment was most recently updated</td>
    </tr>
</table>

## GroupServicesOrderBy

The supported orderBy values for searching for [GroupService](./interfaces.md#groupservice)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Group Service was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Group Service was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Group Service was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Group Service was most recently updated</td>
    </tr>
</table>

## ParticipantServicesOrderBy

The supported orderBy values for searching for [GroupService](./interfaces.md#groupservice)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>PROJECT_ID_ASC</code></td>
        <td>Sort in ascending order by the Group Service's Project ID</td>
    </tr>
    <tr>
        <td nowrap><code>PROJECT_ID_DESC</code></td>
        <td>Sort in descending order by the Group Service's ID</td>
    </tr>
    <tr>
        <td nowrap><code>CAN_WRITE_ASC</code></td>
        <td>Sort in ascending order by if the Group Service can write</td>
    </tr>
    <tr>
        <td nowrap><code>CAN_WRITE_DESC</code></td>
        <td>Sort in descending order by if the Group Service can write</td>
    </tr>
    <tr>
        <td nowrap><code>SERVICE_ID_ASC</code></td>
        <td>Sort in ascending order by the Group Service's Service ID</td>
    </tr>
    <tr>
        <td nowrap><code>SERVICE_ID_DESC</code></td>
        <td>Sort in descending order by the Group Service's Service ID</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Group Service was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Group Service was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the Group Service was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the Group Service was most recently updated</td>
    </tr>
</table>

## ServicesOrderBy

The supported orderBy values for searching for [Service](./interfaces.md#service)s

<table>
    <tr>
        <th nowrap>Name</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>NAME_ASC</code></td>
        <td>Sort in ascending order by the service's name</td>
    </tr>
    <tr>
        <td nowrap><code>NAME_DESC</code></td>
        <td>Sort in descending order by the service's name</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the service was created</td>
    </tr>
    <tr>
        <td nowrap><code>CREATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the service was created</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_ASC</code></td>
        <td>Sort in ascending order by the time the service was most recently updated</td>
    </tr>
    <tr>
        <td nowrap><code>UPDATED_AT_DESC</code></td>
        <td>Sort in descending order by the time the service was most recently updated</td>
    </tr>
</table>
