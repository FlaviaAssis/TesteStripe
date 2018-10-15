import {Router} from '../common/router'
import * as restify from 'restify'
import {User} from './users.model'

class UsersRouter extends Router {
  applyRoutes(application: restify.Server){

    application.get('/users', (req, resp, next) =>{
      var stripe = require("stripe")("sk_test_RDLb2fXPca1GKpQpeip9gXVs");

      stripe.charges.retrieve("ch_1DLYbuCLNtbxmxkqaoRbpRaS", {
        api_key: "sk_test_RDLb2fXPca1GKpQpeip9gXVs"
      }, function(err, charge){
        if(err){
          resp.send(err)
        }
        if(charge){
          resp.send(charge)
          console.log(charge.amount/100)
        }
      });
    })
  }
}

export const usersRouter = new UsersRouter()
