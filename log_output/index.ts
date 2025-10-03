const randString: string = crypto.randomUUID();

function logRandStringWithDate(): void {
  console.log(`${new Date().toISOString()}: ${randString}`)
}

setInterval(logRandStringWithDate, 5000);