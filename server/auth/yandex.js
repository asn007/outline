// @flow
import passport from "@outlinewiki/koa-passport";
import Router from "koa-router";
import { Strategy as SlackStrategy } from "passport-slack-oauth2";
import accountProvisioner from "../commands/accountProvisioner";
import env from "../env";
import auth from "../middlewares/authentication";
import passportMiddleware from "../middlewares/passport";
import { Authentication, Collection, Integration, Team } from "../models";
import * as Slack from "../slack";
import { StateStore } from "../utils/passport";

const router = new Router();
const providerName = "yandex";

const YANDEX_CLIENT_ID = process.env.YANDEX_ID;
const YANDEX_CLIENT_SECRET = process.env.YANDEX_SECRET;

export const config = {
  name: "Yandex",
  enabled: !!YANDEX_CLIENT_ID,
};

if (YANDEX_CLIENT_ID) {
  const strategy = new YandexStrategy();
}

router.get("yandex", passport.authenticate(providerName));

router.get(
  "yandex.callback",
  auth({ required: false }),
  passportMiddleware(providerName)
);

export default router;
