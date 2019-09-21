import models from '../models';
export default function (app) {
    app.post('/api/users', (request, response) => {
        const body = request.body;
        models.User.create({
           username: body.username,
           password: body.password,
           email: body.email,
           valet: body.valet,
           first_name: body.first_name,
           last_name: body.last_name
       }).then(() => {response.end();})
       .catch(err => console.log(err.errors[0].message))
    });
}