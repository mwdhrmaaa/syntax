/**
 * Programming languages syntax data
 * Supporting multi-language explanations
 * THE ULTIMATE GOD MODE: 40+ Languages & Technologies
 */
export const languages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    color: '#f7df1e',
    description: { en: 'The language of the web.', id: 'Bahasa utama web.' },
    syntax: [
      { title: 'Async/Await', code: `async function run() { await task(); }`, explanation: { en: 'Handling async operations.', id: 'Menangani operasi asinkron.' } },
      { title: 'Proxy', code: `const p = new Proxy(target, handler);`, explanation: { en: 'Custom behavior for operations.', id: 'Perilaku kustom untuk operasi.' } },
      { title: 'Optional Chaining', code: `const name = user?.profile?.name;`, explanation: { en: 'Safely access nested properties.', id: 'Mengakses properti bersarang dengan aman.' } }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'PY',
    color: '#3776ab',
    description: { en: 'Simplicity and power.', id: 'Kesederhanaan dan kekuatan.' },
    syntax: [
      { title: 'Generators', code: `def gen(): yield 1; yield 2`, explanation: { en: 'Iterators with yield.', id: 'Iterator dengan yield.' } },
      { title: 'Type Hinting', code: `def greet(name: str) -> str: return f"Hi {name}"`, explanation: { en: 'Static typing for Python.', id: 'Pengetikan statis untuk Python.' } }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    color: '#3178c6',
    description: { en: 'Typed JavaScript.', id: 'JavaScript dengan tipe data.' },
    syntax: [
      { title: 'Utility Types', code: `type PartialUser = Partial<User>;`, explanation: { en: 'Build types from other types.', id: 'Membangun tipe dari tipe lain.' } }
    ]
  },
  {
    id: 'solidity',
    name: 'Solidity',
    icon: 'SOL',
    color: '#363636',
    description: { en: 'Smart contracts.', id: 'Kontrak pintar.' },
    syntax: [
      { title: 'Events', code: `event Sent(address from, address to, uint amount);`, explanation: { en: 'Log data on the blockchain.', id: 'Mencatat data di blockchain.' } }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'C++',
    color: '#00599c',
    description: { en: 'Performance language.', id: 'Bahasa performa.' },
    syntax: [
      { title: 'RAII', code: `std::lock_guard<std::mutex> lock(m);`, explanation: { en: 'Resource Acquisition Is Initialization.', id: 'Akuisisi sumber daya adalah inisialisasi.' } }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: 'RS',
    color: '#dea584',
    description: { en: 'Safe systems language.', id: 'Bahasa sistem aman.' },
    syntax: [
      { title: 'Borrowing', code: `let s2 = &s1;`, explanation: { en: 'References without ownership transfer.', id: 'Referensi tanpa perpindahan kepemilikan.' } }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    icon: 'GO',
    color: '#00add8',
    description: { en: 'Scalable language.', id: 'Bahasa skalabel.' },
    syntax: [
      { title: 'Channels', code: `ch := make(chan int); ch <- 1`, explanation: { en: 'Communication between goroutines.', id: 'Komunikasi antar goroutine.' } }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'JV',
    color: '#ed8b00',
    description: { en: 'Enterprise OOP.', id: 'OOP enterprise.' },
    syntax: [
      { title: 'Records', code: `public record User(String name, int age) {}`, explanation: { en: 'Concise data classes (Java 14+).', id: 'Class data yang ringkas (Java 14+).' } }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: 'KT',
    color: '#7f52ff',
    description: { en: 'Modern JVM.', id: 'JVM modern.' },
    syntax: [
      { title: 'Coroutines', code: `launch { delay(1000L); ... }`, explanation: { en: 'Async programming.', id: 'Pemrograman asinkron.' } }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: 'RB',
    color: '#701516',
    description: { en: 'Elegant scripting.', id: 'Skrip elegan.' },
    syntax: [
      { title: 'Mixins', code: `module Helper; ... end; class User; include Helper; end`, explanation: { en: 'Sharing code between classes.', id: 'Berbagi kode antar class.' } }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: 'SW',
    color: '#f05138',
    description: { en: 'Apple platforms.', id: 'Bahasa platform Apple.' },
    syntax: [
      { title: 'SwiftUI', code: `struct ContentView: View { ... }`, explanation: { en: 'Declarative UI framework.', id: 'Framework UI deklaratif.' } }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'PHP',
    color: '#777bb4',
    description: { en: 'Web engine.', id: 'Mesin web.' },
    syntax: [
      { title: 'Attributes', code: `#[Route("/api")]`, explanation: { en: 'Metadata for classes (PHP 8).', id: 'Metadata untuk class (PHP 8).' } }
    ]
  },
  {
    id: 'dart',
    name: 'Dart',
    icon: 'DT',
    color: '#00d2b8',
    description: { en: 'Client language.', id: 'Bahasa klien.' },
    syntax: [
      { title: 'Cascade', code: `var p = Paint()..color = Colors.black;`, explanation: { en: 'Perform operations on same object.', id: 'Melakukan operasi pada objek yang sama.' } }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'SQL',
    color: '#336791',
    description: { en: 'Query language.', id: 'Bahasa kueri.' },
    syntax: [
      { title: 'Window', code: `RANK() OVER(ORDER BY salary)`, explanation: { en: 'Calculation across rows.', id: 'Kalkulasi di seluruh baris.' } }
    ]
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'HTML',
    color: '#e34f26',
    description: { en: 'Web markup.', id: 'Markup web.' },
    syntax: [
      { title: 'Forms', code: `<form method="POST">...</form>`, explanation: { en: 'Collecting user input.', id: 'Mengumpulkan input pengguna.' } }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'CSS',
    color: '#1572b6',
    description: { en: 'Web styling.', id: 'Gaya visual web.' },
    syntax: [
      { title: 'Grid', code: `.grid { display: grid; }`, explanation: { en: 'Two-dimensional layout.', id: 'Tata letak dua dimensi.' } }
    ]
  },
  {
    id: 'bash',
    name: 'Bash',
    icon: 'SH',
    color: '#4eaa25',
    description: { en: 'Shell scripts.', id: 'Skrip shell.' },
    syntax: [
      { title: 'Loops', code: `for f in *.txt; do echo $f; done`, explanation: { en: 'Iterating in shell.', id: 'Iterasi di shell.' } }
    ]
  },
  {
    id: 'assembly',
    name: 'ASM',
    icon: 'ASM',
    color: '#6e4c13',
    description: { en: 'Low-level.', id: 'Tingkat rendah.' },
    syntax: [
      { title: 'Registers', code: `MOV EAX, 1`, explanation: { en: 'Moving values to registers.', id: 'Memindahkan nilai ke register.' } }
    ]
  },
  {
    id: 'lua',
    name: 'Lua',
    icon: 'LUA',
    color: '#000080',
    description: { en: 'Lightweight language.', id: 'Bahasa ringan.' },
    syntax: [
      { title: 'Tables', code: `t = { a = 1, b = 2 }`, explanation: { en: 'Primary data structure.', id: 'Struktur data utama.' } }
    ]
  },
  {
    id: 'r',
    name: 'R',
    icon: 'R',
    color: '#276dc3',
    description: { en: 'Stats language.', id: 'Bahasa statistik.' },
    syntax: [
      { title: 'Vectors', code: `x <- c(1, 2, 3)`, explanation: { en: 'Basic data structure.', id: 'Struktur data dasar.' } }
    ]
  },
  {
    id: 'scala',
    name: 'Scala',
    icon: 'SC',
    color: '#dc322f',
    description: { en: 'OOP + Functional.', id: 'OOP + Fungsional.' },
    syntax: [
      { title: 'Immutability', code: `val x = 10`, explanation: { en: 'Immutable value definition.', id: 'Definisi nilai yang tidak dapat diubah.' } }
    ]
  },
  {
    id: 'perl',
    name: 'Perl',
    icon: 'PL',
    color: '#39457e',
    description: { en: 'Capable language.', id: 'Bahasa yang mumpuni.' },
    syntax: [
      { title: 'Scalars', code: `my $x = "Perl";`, explanation: { en: 'Simple data type.', id: 'Tipe data sederhana.' } }
    ]
  },
  {
    id: 'haskell',
    name: 'Haskell',
    icon: 'HS',
    color: '#5e5086',
    description: { en: 'Purely functional.', id: 'Fungsional murni.' },
    syntax: [
      { title: 'Recursion', code: `fac 0 = 1; fac n = n * fac (n-1)`, explanation: { en: 'Defining functions by equations.', id: 'Mendefinisikan fungsi dengan persamaan.' } }
    ]
  }
];
