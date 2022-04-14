#!/bin/bash

if [[ $VERCEL =~ "1" ]] ; then
  echo ">> Building storybook for Vercel..."
    make building-storybook
  exit 0;
else
  echo ">> Skipping storybook"
  exit 0; 
fi