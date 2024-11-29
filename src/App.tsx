import React, {useState} from "react";
// Mantine Providers
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
// Router imports
import { RouterProvider, createRouter } from "@tanstack/react-router";
// Generated Routetree
import { routeTree } from "./routeTree.gen";
import { getSupabaseClient } from "./supabase/getSupabaseClient";

export const router = createRouter({
  routeTree,
  context: {
    supabase: undefined!,
  },
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {

const [dateInfo, setDateInfo] = useState(undefined)
const [startTimeInfo, setStartTimeInfo] = useState(undefined)
const [endTimeInfo, setEndTimeInfo] = useState(undefined)
const [numberOfPeopleInfo, setNumberOfPeopleInfo] = useState(undefined)

const context = { 
  supabase: getSupabaseClient(),
  dateInfo,
  setDateInfo,
  startTimeInfo,
  setStartTimeInfo,
  endTimeInfo,
  setEndTimeInfo,
  numberOfPeopleInfo, 
  setNumberOfPeopleInfo
}

  return (
    <MantineProvider>
      <ModalsProvider>
        <RouterProvider
          router={router}
          context={context}
          basepath="/booking"
        />
      </ModalsProvider>
    </MantineProvider>
  );
}
