var seneca = require('seneca')()
            .use('seneca-amqp-transport');

seneca.add('role:amqp_clientservice,cmd:salestax', function (msg, done) {
    var rate  = 0.23
    var total = msg.net * (1 + rate)
    done(null, {total: total})
})
.listen({
    type: 'amqp',
    pin : 'role:amqp_clientservice,cmd:salestax',
    url : 'rabbitmq:5672'
    // url : 'rabbitmq.default.svc.cluster.local:8081'
});

module.exports = seneca;