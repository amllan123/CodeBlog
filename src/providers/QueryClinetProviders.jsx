"use client";
import React from 'react'
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const QueryClinetProviders = ({children}) => {

  const queryClient = new QueryClient();
  return (
    <>
      {/* Provide the client to our App */}
      <QueryClientProvider client={queryClient}>
        {children}
       
      </QueryClientProvider>
    </>
  );
}

export default QueryClinetProviders