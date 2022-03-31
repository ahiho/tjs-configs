#!/usr/bin/env node

/* eslint-disable no-console */

'use strict'

const { exec } = require('child_process')

const args = process.argv.slice(2)
const extensions = 'js,jsx,mjs,ts,tsx,json,md,yml,yaml'

function logError(message) {
  console.log(`Error: ${message}`)
  process.exit(1)
}

if (!args || !args.length || args.length !== 1) {
  logError('Must be 1 argument')
}

const command = args[0]
if (!['write', 'check'].includes(command)) {
  logError('The argument must be be "write" or "check"')
}

exec(`prettier --${command} "**/*.{${extensions}}"`, (err, stdout, stderr) => {
  if (stdout) {
    process.stdout.write(stdout)
  }

  if (stderr) {
    process.stderr.write(stderr)
  }

  if (stderr) {
    process.exit(1)
  }
})
