# seneca-amqp-microservice
A basic implementation of seneca and amqp in microservices.
Similar to the express-seneca-microservice project
We have a server that receives request on it's API, then creates a queue, pushes data in the client queue
The client-service is the consumer service, it consumes incoming data, performs some operations and then sends the response via seneca.
Once the req/res is complete, the queue is destroyed automatically
