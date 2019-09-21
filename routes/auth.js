import passport from 'passport';
import jwt from 'jsonwebtoken';
// import user from '../models/user';
export default function (app) {
     app.post('/api/auth', function(request, response) {
        passport.authenticate(
            'local',
            {session: false}, 
            // { successRedirect: '/guest', failureRedirect: '/login' },
            function(error, user, info) {
                if (error || !user) {
                    return response.status(403).json({
                        message: 'Unable to Authorize',
                        user   : user,
                        error  : error,
                        info: info
                    });
                }
                request.login(user, {session: false}, function(error) {
                    if (error) {
                        response.send(error);
                    }
                    var sanitizedUser = {
                        id: user.id,
                        username: user.username,
                        email: user.email,
                        valet: user.valet
                    };

                    // generate a signed son web token with the contents of user object and return it in the response
                    const token = jwt.sign(sanitizedUser, 'your_jwt_secret');
                    response.json(
                        {
                            user: sanitizedUser,
                            token: token
                        }
                    );
                });
            }
        )(request, response);
    });
}