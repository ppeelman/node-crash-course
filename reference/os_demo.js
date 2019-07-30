const os = require("os");

// Platform
console.log(os.platform());
// Windows: win32
// Mac: darwin

// CPU architecture
console.log(os.arch());
// x64

// CPU core info
console.log(os.cpus());
/* [ { model: 'Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz',
    speed: 2592,
    times:
     { user: 3074656,
       nice: 0,
       sys: 2883093,
       idle: 9718218,
       irq: 217593 } },
  { model: 'Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz',
    speed: 2592,
    times:
     { user: 3999359,
       nice: 0,
       sys: 2274875,
       idle: 9401468,
       irq: 128171 } },
  { model: 'Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz',
    speed: 2592,
    times:
     { user: 3943171,
       nice: 0,
       sys: 2164421,
       idle: 9568109,
       irq: 130203 } },
  { model: 'Intel(R) Core(TM) i7-6500U CPU @ 2.50GHz',
    speed: 2592,
    times:
     { user: 4293796, nice: 0, sys: 1902171, idle: 9479734, irq: 34906 } } ] */

// Free memory
console.log(os.freemem());
// 1785278464

// Total memory
console.log(os.totalmem());
// 8497045504

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime()w);
