import models from '../models';
export default function (app) {
    app.post('/api/cars', (request, response) => {
        const body = request.body;
        models.Car.create({
            licenseplate: body.licenseplate,
            spot: body.spot,
            make_model: body.make_model,
            color: body.color,
            parked: false,
            paid: false,
            pick_up: false,
            in_route: false,
            arrived: false
            // GuestID: ??
       }).then(() => {response.end();})
       .catch(err => console.log(err.errors[0].message))
    });

    // app.post('/api/valets', (request, response) => {
    //     const body = request.body;
    //     models.Valet.create({
    //        username: body.username,
    //        password: body.password,
    //        email: body.email,
    //        first_name: body.first_name,
    //        last_name: body.last_name
    //    }).then(() => {response.end();})
    //    .catch(err => err.errors[0].message)
    // });
}