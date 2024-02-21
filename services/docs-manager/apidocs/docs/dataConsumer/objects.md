# Data Consumer Objects

## ParseError

Represents a parse error record including parse failure details and failed payload

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>ioConnection</code></td>
        <td nowrap><code><a href="../ioConnectionManagement/ioConnectionInterfaces.html#ioconnection">IOConnection</a></code></td>
        <td>
            The IO Connection posting the payload
        </td>
    </tr>
    <tr>
        <td nowrap><code>createdAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>
            Timestamp when the record was created
        </td>
    </tr>
    <tr>
        <td nowrap><code>messageId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>
            Unique ID representing the parse error record.
        </td>
    </tr>
    <tr>
        <td nowrap><code>channel</code></td>
        <td nowrap><code>String</code></td>
        <td>
            Channel for which the parser was configured
        </td>
    </tr>
    <tr>
        <td nowrap><code>errorCode</code></td>
        <td nowrap><code>String!</code></td>
        <td>
            Specific Error Code
        </td>
    </tr>
    <tr>
        <td nowrap><code>errorMessage</code></td>
        <td nowrap><code>String</code></td>
        <td>
            Error message details. Only <a href="./queries.html#parseerror">parseError</a> query is returned, but not <a href="./queries.html#parseerrors">parseErrors</a> query.
        </td>
    </tr>
    <tr>
        <td nowrap><code>lastLoggerRequestId</code></td>
        <td nowrap><code>ID!</code></td>
        <td>
            Last Request that created / updated the errors
        </td>
    </tr>
    <tr>
        <td nowrap><code>messageArrivedAt</code></td>
        <td nowrap><code>DateTime!</code></td>
        <td>
            Timestamp when this payload originally arrived
        </td>
    </tr>
    <tr>
        <td nowrap><code>parserConfiguration</code></td>
        <td nowrap><code><a href="#parserconfiguration">ParserConfiguration</a></code></td>
        <td>
            The parser configuration at the time of failure
        </td>
    </tr>
    <tr>
        <td nowrap><code>payload</code></td>
        <td nowrap><code>String</code></td>
        <td>
            The actual failed payload. Only <a href="./queries.html#parseerror">parseError</a> query is returned, but not <a href="./queries.html#parseerrors">parseErrors</a> query.
        </td>
    </tr>
    <tr>
        <td nowrap><code>reprocessingAttempts</code></td>
        <td nowrap><code>Int!</code></td>
        <td>
            Number of failed processing attempts
        </td>
    </tr>
</table>

## ParseErrors

Represents an array of parse error records including parse failure details and failed payload

<table>
    <tr>
        <th nowrap>Field</th>
        <th nowrap>Type</th>
        <th nowrap>Description</th>
    </tr>
    <tr>
        <td nowrap><code>pageState</code></td>
        <td nowrap><code>String</code></td>
        <td>
            A string token, used for querying next page
        </td>
    </tr>
    <tr>
        <td nowrap><code>rows</code></td>
        <td nowrap><code>[<a href="./objects.html#parseerror">ParseError</a>!]!</code></td>
        <td>
            An array of parse error records
        </td>
    </tr>
</table>
