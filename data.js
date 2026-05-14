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
        code: `let name = "Antigravity";\nconst version = 1.0;`,
        explanation: {
            en: 'Use "let" for variables and "const" for constants.',
            id: 'Gunakan "let" untuk variabel dan "const" untuk konstanta.'
        }
      },
      {
        title: 'Arrow Functions',
        code: `const add = (a, b) => a + b;`,
        explanation: {
            en: 'Short syntax for writing functions.',
            id: 'Sintaks pendek untuk menulis fungsi.'
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
        code: `squares = [x**2 for x in range(10)]`,
        explanation: {
            en: 'A concise way to create lists.',
            id: 'Cara ringkas untuk membuat list.'
        }
      },
      {
        title: 'Dictionary',
        code: `user = {"name": "Alice", "age": 25}`,
        explanation: {
            en: 'Key-value pair data structure.',
            id: 'Struktur data pasangan kunci-nilai.'
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
        en: 'Client-optimized language for fast apps on any platform.',
        id: 'Bahasa yang dioptimalkan untuk klien untuk aplikasi cepat di platform apa pun.'
    },
    syntax: [
      {
        title: 'Main Function',
        code: `void main() {\n  print('Hello, Dart!');\n}`,
        explanation: {
            en: 'Every Dart app must have a top-level main() function.',
            id: 'Setiap aplikasi Dart harus memiliki fungsi main() tingkat atas.'
        }
      },
      {
        title: 'Classes',
        code: `class Point {\n  double x, y;\n  Point(this.x, this.y);\n}`,
        explanation: {
            en: 'Dart is object-oriented with classes and mixins.',
            id: 'Dart berorientasi objek dengan class dan mixin.'
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
        en: 'The standard markup language for documents designed to be displayed in a web browser.',
        id: 'Bahasa markup standar untuk dokumen yang dirancang untuk ditampilkan di browser web.'
    },
    syntax: [
      {
        title: 'Structure',
        code: `<!DOCTYPE html>\n<html>\n<head>\n  <title>Page Title</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>`,
        explanation: {
            en: 'The basic building blocks of any web page.',
            id: 'Blok bangunan dasar dari setiap halaman web.'
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
        en: 'Used for describing the presentation of a document written in HTML.',
        id: 'Digunakan untuk mendeskripsikan presentasi dokumen yang ditulis dalam HTML.'
    },
    syntax: [
      {
        title: 'Selectors',
        code: `.container {\n  display: flex;\n  justify-content: center;\n  color: #333;\n}`,
        explanation: {
            en: 'Rules to style specific elements on a web page.',
            id: 'Aturan untuk menata elemen tertentu pada halaman web.'
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
        en: 'Unix shell and command language.',
        id: 'Shell Unix dan bahasa perintah.'
    },
    syntax: [
      {
        title: 'Variables',
        code: `NAME="User"\necho "Hello $NAME"`,
        explanation: {
            en: 'Simple variable assignment and usage in shell scripts.',
            id: 'Penetapan dan penggunaan variabel sederhana dalam skrip shell.'
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
        title: 'Vectors',
        code: `#include <vector>\nstd::vector<int> v = {1, 2, 3};`,
        explanation: {
            en: 'Standard dynamic array implementation.',
            id: 'Implementasi array dinamis standar.'
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
        title: 'Streams',
        code: `list.stream().filter(s -> s.startsWith("A")).forEach(System.out::println);`,
        explanation: {
            en: 'Modern functional-style operations on collections.',
            id: 'Operasi gaya fungsional modern pada koleksi.'
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
        title: 'Generics',
        code: `function identity<T>(arg: T): T {\n    return arg;\n}`,
        explanation: {
            en: 'Reusable components that work with a variety of types.',
            id: 'Komponen yang dapat digunakan kembali yang bekerja dengan berbagai tipe data.'
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
        title: 'Transactions',
        code: `BEGIN TRANSACTION;\nUPDATE accounts SET balance = balance - 100 WHERE id = 1;\nCOMMIT;`,
        explanation: {
            en: 'Ensures data integrity for multiple operations.',
            id: 'Memastikan integritas data untuk beberapa operasi.'
        }
      }
    ]
  }
];
