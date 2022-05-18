import * as Express from 'express';
const indexRouter = Express.Router();

indexRouter.get('/', function(req:Express.Request, res:Express.Response) {
  res.render('ext-home', {extensions: 'OtakuDesu', lists: 'ARRAY OF STUFF HERE'});
});

export {indexRouter};
