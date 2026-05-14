/**
 * Programming languages syntax data
 * Supporting multi-language explanations
 */
export const languages = [
  {
    id: 'javascript',
    name: 'JavaScript',
    icon: 'JS',
    color: '#f7df1e',
    description: {
        en: 'A high-level, interpreted programming language.',
        id: 'Bahasa pemrograman tingkat tinggi yang diinterpretasi.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `let name = "Antigravity";\nconst version = 1.0;\nvar legacy = true;`,
        explanation: {
            en: 'Use "let" for block-scoped variables, "const" for constants.',
            id: 'Gunakan "let" untuk variabel lingkup blok, "const" untuk konstanta.'
        }
      },
      {
        title: 'Functions',
        code: `// Arrow function\nconst greet = (name) => \`Hello \${name}\`;\n\n// Async function\nasync function fetchData() {\n  const res = await fetch(url);\n  return res.json();\n}`,
        explanation: {
            en: 'Functions can be defined as arrows or using the function keyword. Async/await handles asynchronous operations.',
            id: 'Fungsi dapat didefinisikan sebagai arrow atau menggunakan kata kunci function. Async/await menangani operasi asinkron.'
        }
      },
      {
        title: 'Loops',
        code: `// Array iteration\nitems.forEach(item => console.log(item));\n\n// For-of loop\nfor (const item of items) {\n  process(item);\n}`,
        explanation: {
            en: 'Iterate over arrays using forEach or the modern for-of loop.',
            id: 'Iterasi melalui array menggunakan forEach atau loop for-of yang modern.'
        }
      },
      {
        title: 'Destructuring',
        code: `const user = { name: "Antigravity", age: 25 };\nconst { name, age } = user;\n\nconst [first, second] = [1, 2];`,
        explanation: {
            en: 'Extract values from objects or arrays easily.',
            id: 'Mengekstrak nilai dari objek atau array dengan mudah.'
        }
      }
    ]
  },
  {
    id: 'python',
    name: 'Python',
    icon: 'PY',
    color: '#3776ab',
    description: {
        en: 'Known for readability and simplicity.',
        id: 'Dikenal karena keterbacaan dan kesederhanaannya.'
    },
    syntax: [
      {
        title: 'List Comprehension',
        code: `squares = [x**2 for x in range(10) if x % 2 == 0]`,
        explanation: {
            en: 'A concise way to create lists with filtering.',
            id: 'Cara ringkas untuk membuat list dengan penyaringan.'
        }
      },
      {
        title: 'Error Handling',
        code: `try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print("Cannot divide by zero")\nfinally:\n    print("Cleanup")`,
        explanation: {
            en: 'Use try-except blocks to handle exceptions gracefully.',
            id: 'Gunakan blok try-except untuk menangani eksepsi dengan baik.'
        }
      },
      {
        title: 'Decorators',
        code: `@my_decorator\ndef my_function():\n    pass`,
        explanation: {
            en: 'Decorators modify the behavior of a function or class.',
            id: 'Decorator memodifikasi perilaku fungsi atau class.'
        }
      },
      {
        title: 'File I/O',
        code: `with open('file.txt', 'r') as f:\n    content = f.read()`,
        explanation: {
            en: 'The "with" statement ensures proper resource cleanup (closing the file).',
            id: 'Pernyataan "with" memastikan pembersihan sumber daya yang tepat (menutup file).'
        }
      }
    ]
  },
  {
    id: 'cpp',
    name: 'C++',
    icon: 'C++',
    color: '#00599c',
    description: {
        en: 'Powerful general-purpose programming language.',
        id: 'Bahasa pemrograman serbaguna yang kuat.'
    },
    syntax: [
      {
        title: 'Pointers',
        code: `int x = 10;\nint* ptr = &x;\nstd::cout << *ptr; // Outputs 10`,
        explanation: {
            en: 'Pointers store the memory address of another variable.',
            id: 'Pointer menyimpan alamat memori dari variabel lain.'
        }
      },
      {
        title: 'Smart Pointers',
        code: `auto ptr = std::make_unique<int>(10);\n// Automatically deleted when out of scope`,
        explanation: {
            en: 'Modern C++ uses smart pointers for automatic memory management.',
            id: 'C++ modern menggunakan smart pointer untuk manajemen memori otomatis.'
        }
      },
      {
        title: 'Templates',
        code: `template <typename T>\nT add(T a, T b) {\n    return a + b;\n}`,
        explanation: {
            en: 'Templates allow writing generic functions and classes.',
            id: 'Template memungkinkan penulisan fungsi dan class generik.'
        }
      }
    ]
  },
  {
    id: 'java',
    name: 'Java',
    icon: 'JV',
    color: '#ed8b00',
    description: {
        en: 'Class-based, object-oriented programming language.',
        id: 'Bahasa pemrograman berorientasi objek berbasis class.'
    },
    syntax: [
      {
        title: 'Lambda Expressions',
        code: `list.forEach(n -> System.out.println(n));`,
        explanation: {
            en: 'Lambdas provide a clear and concise way to represent one method interface using an expression.',
            id: 'Lambda memberikan cara yang jelas dan ringkas untuk merepresentasikan antarmuka satu metode menggunakan ekspresi.'
        }
      },
      {
        title: 'Inheritance',
        code: `class Animal {\n  void eat() { ... }\n}\n\nclass Dog extends Animal {\n  void bark() { ... }\n}`,
        explanation: {
            en: 'Mechanism where one class acquires properties of another.',
            id: 'Mekanisme di mana satu class memperoleh properti dari class lain.'
        }
      }
    ]
  },
  {
    id: 'go',
    name: 'Go',
    icon: 'GO',
    color: '#00add8',
    description: {
        en: 'A simple, reliable, and efficient language.',
        id: 'Bahasa yang sederhana, andal, dan efisien.'
    },
    syntax: [
      {
        title: 'Goroutines',
        code: `go func(msg string) {\n    fmt.Println(msg)\n}("Hello")`,
        explanation: {
            en: 'Lightweight threads managed by the Go runtime.',
            id: 'Thread ringan yang dikelola oleh Go runtime.'
        }
      },
      {
        title: 'Channels',
        code: `ch := make(chan int)\ngo func() { ch <- 42 }()\nval := <-ch`,
        explanation: {
            en: 'Channels allow goroutines to communicate and synchronize.',
            id: 'Channel memungkinkan goroutine untuk berkomunikasi dan bersinkronisasi.'
        }
      },
      {
        title: 'Interfaces',
        code: `type Speaker interface {\n    Speak() string\n}`,
        explanation: {
            en: 'Implicitly satisfied interfaces allow for flexible polymorphism.',
            id: 'Interface yang dipenuhi secara implisit memungkinkan polimorfisme yang fleksibel.'
        }
      }
    ]
  },
  {
    id: 'rust',
    name: 'Rust',
    icon: 'RS',
    color: '#dea584',
    description: {
        en: 'A language focused on safety and performance.',
        id: 'Bahasa yang berfokus pada keamanan dan performa.'
    },
    syntax: [
      {
        title: 'Pattern Matching',
        code: `match value {\n    1 => println!("One"),\n    2 | 3 => println!("Two or Three"),\n    _ => println!("Other"),\n}`,
        explanation: {
            en: 'Powerful control flow construct for comparing values against patterns.',
            id: 'Konstruksi alur kontrol yang kuat untuk membandingkan nilai terhadap pola.'
        }
      },
      {
        title: 'Enums',
        code: `enum WebEvent {\n    PageLoad,\n    KeyPress(char),\n    Click { x: i64, y: i64 },\n}`,
        explanation: {
            en: 'Enums can have data associated with each variant.',
            id: 'Enum dapat memiliki data yang terkait dengan setiap varian.'
        }
      }
    ]
  },
  {
    id: 'dart',
    name: 'Dart',
    icon: 'DT',
    color: '#00d2b8',
    description: {
        en: 'Client-optimized language for fast apps.',
        id: 'Bahasa yang dioptimalkan untuk klien untuk aplikasi cepat.'
    },
    syntax: [
      {
        title: 'Cascade Notation',
        code: `var paint = Paint()\n  ..color = Colors.black\n  ..strokeCap = StrokeCap.round\n  ..strokeWidth = 5.0;`,
        explanation: {
            en: 'Perform a sequence of operations on the same object.',
            id: 'Melakukan urutan operasi pada objek yang sama.'
        }
      },
      {
        title: 'Streams',
        code: `Stream<int> countStream(int to) async* {\n  for (int i = 1; i <= to; i++) {\n    yield i;\n  }\n}`,
        explanation: {
            en: 'Async* and yield produce a stream of values.',
            id: 'Async* dan yield menghasilkan aliran nilai (stream).'
        }
      }
    ]
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    icon: 'TS',
    color: '#3178c6',
    description: {
        en: 'Strongly typed JavaScript.',
        id: 'JavaScript dengan pengetikan kuat.'
    },
    syntax: [
      {
        title: 'Interfaces',
        code: `interface User {\n    name: string;\n    id: number;\n}`,
        explanation: {
            en: 'Define the shape of an object.',
            id: 'Mendefinisikan bentuk sebuah objek.'
        }
      },
      {
        title: 'Generics',
        code: `function identity<T>(arg: T): T {\n    return arg;\n}`,
        explanation: {
            en: 'Reusable components that work with a variety of types.',
            id: 'Komponen yang dapat digunakan kembali yang bekerja dengan berbagai tipe data.'
        }
      },
      {
        title: 'Enums',
        code: `enum Color { Red, Green, Blue }`,
        explanation: {
            en: 'Friendly names for sets of numeric values.',
            id: 'Nama ramah untuk kumpulan nilai numerik.'
        }
      }
    ]
  },
  {
    id: 'kotlin',
    name: 'Kotlin',
    icon: 'KT',
    color: '#7f52ff',
    description: {
        en: 'Modern programming language for JVM and Android.',
        id: 'Bahasa pemrograman modern untuk JVM dan Android.'
    },
    syntax: [
      {
        title: 'Null Safety',
        code: `var name: String? = null\nprintln(name?.length ?: 0)`,
        explanation: {
            en: 'Safe calls (?.) and Elvis operator (?:) for null handling.',
            id: 'Safe calls (?.) dan operator Elvis (?:) untuk penanganan null.'
        }
      },
      {
        title: 'Data Classes',
        code: `data class User(val name: String, val age: Int)`,
        explanation: {
            en: 'Concise way to create classes for holding data.',
            id: 'Cara ringkas untuk membuat class untuk menampung data.'
        }
      },
      {
        title: 'Extensions',
        code: `fun String.removeFirst(): String = this.substring(1)`,
        explanation: {
            en: 'Add functionality to existing classes without inheritance.',
            id: 'Menambahkan fungsionalitas ke class yang ada tanpa pewarisan.'
        }
      }
    ]
  },
  {
    id: 'swift',
    name: 'Swift',
    icon: 'SW',
    color: '#f05138',
    description: {
        en: 'Fast, safe, and interactive language for Apple platforms.',
        id: 'Bahasa yang cepat, aman, dan interaktif untuk platform Apple.'
    },
    syntax: [
      {
        title: 'Guard Statement',
        code: `guard let name = person.name else { return }`,
        explanation: {
            en: 'Used for early exit and safety checks.',
            id: 'Digunakan untuk keluar lebih awal dan pemeriksaan keamanan.'
        }
      },
      {
        title: 'Closures',
        code: `let sorted = names.sorted { $0 < $1 }`,
        explanation: {
            en: 'Self-contained blocks of functionality that can be passed around.',
            id: 'Blok fungsionalitas mandiri yang dapat dioperkan.'
        }
      }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby',
    icon: 'RB',
    color: '#701516',
    description: {
        en: 'Focussed on simplicity and productivity.',
        id: 'Berfokus pada kesederhanaan dan produktivitas.'
    },
    syntax: [
      {
        title: 'Blocks',
        code: `5.times { |i| puts "Hello #{i}" }`,
        explanation: {
            en: 'Chunks of code that can be passed to methods.',
            id: 'Potongan kode yang dapat dioperkan ke metode.'
        }
      },
      {
        title: 'Symbols',
        code: `user = { :name => "Ruby", :id => 1 }`,
        explanation: {
            en: 'Immutable strings often used as keys in hashes.',
            id: 'String yang tidak dapat diubah, sering digunakan sebagai kunci dalam hash.'
        }
      }
    ]
  },
  {
    id: 'csharp',
    name: 'C#',
    icon: 'C#',
    color: '#178600',
    description: {
        en: 'Object-oriented language for .NET.',
        id: 'Bahasa berorientasi objek untuk .NET.'
    },
    syntax: [
      {
        title: 'LINQ',
        code: `var result = list.Where(x => x > 10).OrderBy(x => x);`,
        explanation: {
            en: 'Language Integrated Query for powerful data manipulation.',
            id: 'Language Integrated Query untuk manipulasi data yang kuat.'
        }
      },
      {
        title: 'Properties',
        code: `public string Name { get; set; }`,
        explanation: {
            en: 'Shorthand for private fields with getter/setter methods.',
            id: 'Singkatan untuk field privat dengan metode getter/setter.'
        }
      }
    ]
  },
  {
    id: 'php',
    name: 'PHP',
    icon: 'PHP',
    color: '#777bb4',
    description: {
        en: 'Scripting language suited to web development.',
        id: 'Bahasa skrip yang cocok untuk pengembangan web.'
    },
    syntax: [
      {
        title: 'Ternary & Null Coalescing',
        code: `$user = $name ?? 'Guest';\n$status = ($age >= 18) ? 'Adult' : 'Minor';`,
        explanation: {
            en: 'Shorthand for if-else and null checks.',
            id: 'Singkatan untuk pemeriksaan if-else dan null.'
        }
      },
      {
        title: 'Classes',
        code: `class User {\n    public function __construct(public string $name) {}\n}`,
        explanation: {
            en: 'Modern PHP 8+ property promotion in constructor.',
            id: 'Promosi properti PHP 8+ modern dalam constructor.'
        }
      }
    ]
  },
  {
    id: 'sql',
    name: 'SQL',
    icon: 'SQL',
    color: '#336791',
    description: {
        en: 'Language for databases.',
        id: 'Bahasa untuk database.'
    },
    syntax: [
      {
        title: 'Subqueries',
        code: `SELECT name FROM users\nWHERE id IN (SELECT user_id FROM orders WHERE amount > 100);`,
        explanation: {
            en: 'A query nested inside another query.',
            id: 'Kueri yang bersarang di dalam kueri lain.'
        }
      },
      {
        title: 'GROUP BY',
        code: `SELECT category, COUNT(*) FROM products\nGROUP BY category\nHAVING COUNT(*) > 5;`,
        explanation: {
            en: 'Group rows and filter them based on aggregate conditions.',
            id: 'Mengelompokkan baris dan menyaringnya berdasarkan kondisi agregat.'
        }
      }
    ]
  },
  {
    id: 'html',
    name: 'HTML',
    icon: 'HTML',
    color: '#e34f26',
    description: {
        en: 'Markup language for web pages.',
        id: 'Bahasa markup untuk halaman web.'
    },
    syntax: [
      {
        title: 'Forms',
        code: `<form action="/submit" method="POST">\n  <input type="text" name="name">\n  <button type="submit">Submit</button>\n</form>`,
        explanation: {
            en: 'Interactive elements for collecting user input.',
            id: 'Elemen interaktif untuk mengumpulkan input pengguna.'
        }
      },
      {
        title: 'Semantic HTML',
        code: `<main>\n  <header></header>\n  <section></section>\n  <footer></footer>\n</main>`,
        explanation: {
            en: 'Use tags that describe their meaning to both browser and developer.',
            id: 'Gunakan tag yang mendeskripsikan maknanya bagi browser dan pengembang.'
        }
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS',
    icon: 'CSS',
    color: '#1572b6',
    description: {
        en: 'Styles web documents.',
        id: 'Menghias dokumen web.'
    },
    syntax: [
      {
        title: 'Grid Layout',
        code: `.grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  gap: 20px;\n}`,
        explanation: {
            en: 'Two-dimensional layout system for the web.',
            id: 'Sistem tata letak dua dimensi untuk web.'
        }
      },
      {
        title: 'Variables',
        code: `:root {\n  --primary: #3498db;\n}\n.btn { color: var(--primary); }`,
        explanation: {
            en: 'Native CSS variables for reusable values.',
            id: 'Variabel CSS asli untuk nilai yang dapat digunakan kembali.'
        }
      }
    ]
  },
  {
    id: 'bash',
    name: 'Bash',
    icon: 'SH',
    color: '#4eaa25',
    description: {
        en: 'Unix shell command language.',
        id: 'Bahasa perintah shell Unix.'
    },
    syntax: [
      {
        title: 'Functions',
        code: `greet() {\n  echo "Hello, $1"\n}\ngreet "World"`,
        explanation: {
            en: 'Reusable script blocks with positional arguments.',
            id: 'Blok skrip yang dapat digunakan kembali dengan argumen posisional.'
        }
      },
      {
        title: 'Loops',
        code: `for file in *.txt; do\n  echo $file\ndone`,
        explanation: {
            en: 'Iterate over files or sequences in the shell.',
            id: 'Iterasi melalui file atau urutan di shell.'
        }
      }
    ]
  },
  {
    id: 'lua',
    name: 'Lua',
    icon: 'LUA',
    color: '#000080',
    description: {
        en: 'A lightweight, high-level, multi-paradigm programming language.',
        id: 'Bahasa pemrograman multi-paradigma tingkat tinggi yang ringan.'
    },
    syntax: [
      {
        title: 'Tables',
        code: `config = { width = 100, height = 200 }\nprint(config.width)`,
        explanation: {
            en: 'Tables are the primary data structure in Lua.',
            id: 'Tabel adalah struktur data utama di Lua.'
        }
      }
    ]
  },
  {
    id: 'r',
    name: 'R',
    icon: 'R',
    color: '#276dc3',
    description: {
        en: 'A language and environment for statistical computing and graphics.',
        id: 'Bahasa dan lingkungan untuk komputasi statistik dan grafis.'
    },
    syntax: [
      {
        title: 'Vectors',
        code: `x <- c(1, 2, 3, 4, 5)\nmean(x)`,
        explanation: {
            en: 'Vectors are basic data structures in R, created using the c() function.',
            id: 'Vektor adalah struktur data dasar di R, dibuat menggunakan fungsi c().'
        }
      }
    ]
  },
  {
    id: 'scala',
    name: 'Scala',
    icon: 'SC',
    color: '#dc322f',
    description: {
        en: 'Combines object-oriented and functional programming in one concise language.',
        id: 'Menggabungkan pemrograman berorientasi objek dan fungsional dalam satu bahasa yang ringkas.'
    },
    syntax: [
      {
        title: 'Immutability',
        code: `val x = 10 // Immutable\nvar y = 20 // Mutable`,
        explanation: {
            en: 'Scala encourages the use of immutable values with "val".',
            id: 'Scala mendorong penggunaan nilai yang tidak dapat diubah dengan "val".'
        }
      }
    ]
  },
  {
    id: 'perl',
    name: 'Perl',
    icon: 'PL',
    color: '#39457e',
    description: {
        en: 'A highly capable, feature-rich programming language.',
        id: 'Bahasa pemrograman yang sangat mumpuni dan kaya fitur.'
    },
    syntax: [
      {
        title: 'Scalars',
        code: `my $name = "Perl";\nprint "Hello, $name\\n";`,
        explanation: {
            en: 'Scalars are the simplest data types, prefixed with $.',
            id: 'Scalar adalah tipe data paling sederhana, diawali dengan $.'
        }
      }
    ]
  },
  {
    id: 'haskell',
    name: 'Haskell',
    icon: 'HS',
    color: '#5e5086',
    description: {
        en: 'A purely functional programming language.',
        id: 'Bahasa pemrograman fungsional murni.'
    },
    syntax: [
      {
        title: 'Functions',
        code: `factorial n = product [1..n]\nmain = print (factorial 5)`,
        explanation: {
            en: 'Functions are defined by equations. Recursion and list operations are common.',
            id: 'Fungsi didefinisikan oleh persamaan. Rekursi dan operasi list adalah hal umum.'
        }
      }
    ]
  }
];
