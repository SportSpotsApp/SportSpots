import Spot from '../../src/models/Spot';
import { parse } from "@babel/core";
import FirebaseRequest from "../../src/API/spotAPI"

const api = new FirebaseRequest()

api.getSpot();

setTimeout(function () { const spots: Spot[] = api.Output; });
