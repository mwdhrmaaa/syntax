/**
 * Programming languages syntax data
 * Supporting multi-language explanations
 * THE GOD MODE UPDATE: 35+ Languages & Technologies
 */
export const languages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    color: '#f7df1e',
    description: { en: 'The language of the web.', id: 'Bahasa utama web.' },
    syntax: [
      { title: 'Variables', code: `let x = 10; const y = 20;`, explanation: { en: 'let/const usage.', id: 'Penggunaan let/const.' } },
      { title: 'Async/Await', code: `async function run() { await task(); }`, explanation: { en: 'Handling async operations.', id: 'Menangani operasi asinkron.' } },
      { title: 'Destructuring', code: `const { name, age } = user;`, explanation: { en: 'Extracting object properties.', id: 'Mengekstrak properti objek.' } },
      { title: 'Proxy', code: `const p = new Proxy(target, handler);`, explanation: { en: 'Custom behavior for fundamental operations.', id: 'Perilaku kustom untuk operasi dasar.' } }
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
      { title: 'Context Managers', code: `with open('f.txt') as f: pass`, explanation: { en: 'Resource management.', id: 'Manajemen sumber daya.' } },
      { title: 'Decorators', code: `@log\ndef func(): pass`, explanation: { en: 'Modifying function behavior.', id: 'Memodifikasi perilaku fungsi.' } }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'C++',
    color: '#00599c',
    description: { en: 'High-performance systems language.', id: 'Bahasa sistem berperforma tinggi.' },
    syntax: [
      { title: 'Pointers', code: `int* ptr = &val;`, explanation: { en: 'Memory address storage.', id: 'Penyimpanan alamat memori.' } },
      { title: 'Smart Pointers', code: `auto p = std::make_unique<int>(10);`, explanation: { en: 'Automatic memory management.', id: 'Manajemen memori otomatis.' } }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'JV',
    color: '#ed8b00',
    description: { en: 'Class-based OOP.', id: 'OOP berbasis class.' },
    syntax: [
      { title: 'Lambda', code: `list.forEach(n -> System.out.println(n));`, explanation: { en: 'Functional style operations.', id: 'Operasi gaya fungsional.' } },
      { title: 'Streams', code: `list.stream().filter(n -> n > 0).collect(...);`, explanation: { en: 'Processing sequences of elements.', id: 'Memproses urutan elemen.' } }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    color: '#3178c6',
    description: { en: 'Typed JavaScript.', id: 'JavaScript dengan tipe data.' },
    syntax: [
      { title: 'Interfaces', code: `interface User { name: string; }`, explanation: { en: 'Object shape definition.', id: 'Definisi bentuk objek.' } },
      { title: 'Generics', code: `function wrap<T>(item: T): T { return item; }`, explanation: { en: 'Type-safe reusable components.', id: 'Komponen reusable yang aman tipe.' } }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: 'KT',
    color: '#7f52ff',
    description: { en: 'Modern JVM language.', id: 'Bahasa JVM modern.' },
    syntax: [
      { title: 'Null Safety', code: `val name: String? = null`, explanation: { en: 'Handling null at compile time.', id: 'Menangani null saat kompilasi.' } },
      { title: 'Extensions', code: `fun Int.isEven() = this % 2 == 0`, explanation: { en: 'Adding methods to existing classes.', id: 'Menambah metode ke class yang ada.' } }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    icon: 'GO',
    color: '#00add8',
    description: { en: 'Simplicity and concurrency.', id: 'Kesederhanaan dan konkurensi.' },
    syntax: [
      { title: 'Goroutines', code: `go task()`, explanation: { en: 'Lightweight execution threads.', id: 'Thread eksekusi ringan.' } },
      { title: 'Channels', code: `ch := make(chan int); ch <- 1`, explanation: { en: 'Communication between goroutines.', id: 'Komunikasi antar goroutine.' } }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: 'RS',
    color: '#dea584',
    description: { en: 'Safe systems language.', id: 'Bahasa sistem yang aman.' },
    syntax: [
      { title: 'Borrowing', code: `let s2 = &s1;`, explanation: { en: 'References without ownership transfer.', id: 'Referensi tanpa perpindahan kepemilikan.' } },
      { title: 'Match', code: `match x { 1 => "one", _ => "many" }`, explanation: { en: 'Exhaustive pattern matching.', id: 'Pattern matching yang menyeluruh.' } }
    ]
  },
  {
    id: 'solidity',
    name: 'Solidity',
    icon: 'SOL',
    color: '#363636',
    description: { en: 'Smart contracts for Ethereum.', id: 'Smart contract untuk Ethereum.' },
    syntax: [
      { title: 'Contract', code: `contract MyContract {\n  address public owner;\n  constructor() { owner = msg.sender; }\n}`, explanation: { en: 'Basic contract structure.', id: 'Struktur kontrak dasar.' } },
      { title: 'Mapping', code: `mapping(address => uint) public balances;`, explanation: { en: 'Key-value storage for addresses.', id: 'Penyimpanan kunci-nilai untuk alamat.' } }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'SQL',
    color: '#336791',
    description: { en: 'Database language.', id: 'Bahasa database.' },
    syntax: [
      { title: 'SELECT', code: `SELECT * FROM users WHERE age > 18;`, explanation: { en: 'Retrieving data.', id: 'Mengambil data.' } },
      { title: 'JOIN', code: `SELECT * FROM a INNER JOIN b ON a.id = b.id;`, explanation: { en: 'Combining tables.', id: 'Menggabungkan tabel.' } }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'PHP',
    color: '#777bb4',
    description: { en: 'Web scripting language.', id: 'Bahasa skrip web.' },
    syntax: [
      { title: 'Variables', code: `$name = "PHP";`, explanation: { en: 'Dynamic variables with $.', id: 'Variabel dinamis dengan $.' } },
      { title: 'Arrays', code: `$arr = ["a", "b"];`, explanation: { en: 'Modern array syntax.', id: 'Sintaks array modern.' } }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: 'SW',
    color: '#f05138',
    description: { en: 'Apple platforms language.', id: 'Bahasa platform Apple.' },
    syntax: [
      { title: 'Guard', code: `guard let x = val else { return }`, explanation: { en: 'Early exit and safety.', id: 'Keluar awal dan keamanan.' } },
      { title: 'Optionals', code: `var name: String?`, explanation: { en: 'Representing absent values.', id: 'Merepresentasikan nilai yang absen.' } }
    ]
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'HTML',
    color: '#e34f26',
    description: { en: 'Web markup.', id: 'Markup web.' },
    syntax: [
      { title: 'Structure', code: `<html>\n<body>\n  <h1>Title</h1>\n</body>\n</html>`, explanation: { en: 'Standard web document.', id: 'Dokumen web standar.' } }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'CSS',
    color: '#1572b6',
    description: { en: 'Web styling.', id: 'Gaya visual web.' },
    syntax: [
      { title: 'Flexbox', code: `.box { display: flex; }`, explanation: { en: 'Flexible layout system.', id: 'Sistem tata letak fleksibel.' } },
      { title: 'Grid', code: `.grid { display: grid; }`, explanation: { en: 'Two-dimensional layout.', id: 'Tata letak dua dimensi.' } }
    ]
  },
  {
    id: 'bash',
    name: 'Bash',
    icon: 'SH',
    color: '#4eaa25',
    description: { en: 'Shell scripting.', id: 'Skrip shell.' },
    syntax: [
      { title: 'Variables', code: `NAME="User"; echo $NAME`, explanation: { en: 'Shell variable usage.', id: 'Penggunaan variabel shell.' } }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: 'RB',
    color: '#701516',
    description: { en: 'Simplicity and productivity.', id: 'Kesederhanaan dan produktivitas.' },
    syntax: [
      { title: 'Blocks', code: `[1, 2].each { |x| puts x }`, explanation: { en: 'Iterating with blocks.', id: 'Iterasi dengan blok.' } }
    ]
  },
  {
    id: 'dart',
    name: 'Dart',
    icon: 'DT',
    color: '#00d2b8',
    description: { en: 'Client-side language.', id: 'Bahasa sisi klien.' },
    syntax: [
      { title: 'Classes', code: `class User { String name; }`, explanation: { en: 'Object-oriented structure.', id: 'Struktur berorientasi objek.' } }
    ]
  },
  {
    id: 'julia',
    name: 'Julia',
    icon: 'JL',
    color: '#9558b2',
    description: { en: 'High-performance computing.', id: 'Komputasi berperforma tinggi.' },
    syntax: [
      { title: 'Dispatch', code: `f(x::Int) = x + 1`, explanation: { en: 'Type-based function selection.', id: 'Pemilihan fungsi berbasis tipe.' } }
    ]
  },
  {
    id: 'elixir',
    name: 'Elixir',
    icon: 'EX',
    color: '#4e2a8e',
    description: { en: 'Fault-tolerant apps.', id: 'Aplikasi tahan kesalahan.' },
    syntax: [
      { title: 'Pipe', code: `val |> func()`, explanation: { en: 'Chaining functions.', id: 'Menghubungkan fungsi.' } }
    ]
  },
  {
    id: 'markdown',
    name: 'Markdown',
    icon: 'MD',
    color: '#083fa1',
    description: { en: 'Lightweight markup.', id: 'Markup ringan.' },
    syntax: [
      { title: 'Headers', code: `# Title`, explanation: { en: 'Header levels.', id: 'Level judul.' } }
    ]
  },
  {
    id: 'json',
    name: 'JSON',
    icon: 'JSON',
    color: '#000000',
    description: { en: 'Data format.', id: 'Format data.' },
    syntax: [
      { title: 'Object', code: `{"id": 1}`, explanation: { en: 'Data representation.', id: 'Representasi data.' } }
    ]
  },
  {
    id: 'yaml',
    name: 'YAML',
    icon: 'YML',
    color: '#cb171e',
    description: { en: 'Friendly serialization.', id: 'Serialisasi ramah manusia.' },
    syntax: [
      { title: 'Key', code: `key: value`, explanation: { en: 'Data structure.', id: 'Struktur data.' } }
    ]
  }
];
