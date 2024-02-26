"use client";

import { Amplify } from "aws-amplify";
import amplifyconfiguration from "@/amplifyconfiguration.json";

Amplify.configure(amplifyconfiguration, { ssr: true });

export default function ConfigureAmplifyClientSide() {
  return null;
}
