---
type: "[[library]]"
source_code: https://github.com/jshttp/negotiator
---
A content negotiator is a component in an HTTP-based system that helps determine the best representation of a resource to be returned in a response based on the client's requested preferences.

In the HTTP protocol, clients can specify their preferences for the type of content they'd like to receive using headers such as `Accept`, `Accept-Language`, `Accept-Encoding`, etc. For instance, a client might indicate that it prefers to receive data in JSON format or HTML, XML, etc. Similarly, a client can indicate its preferred language or encoding.

Upon receiving a request with such headers, the server can use a content negotiator to determine the best resource representation that matches the client's preferences. If the server supports multiple representations, the content negotiator helps to select the most appropriate one.

For example, consider an API that can return data about a book in both JSON and XML formats:

- If a client sends a request with the header, `Accept: application/json`, the server, with the help of a content negotiator, will return the data in JSON format.
- If another client sends a request with the header `Accept: application/xml`, the data will be returned in XML format.