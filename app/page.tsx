import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Download,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Smartphone,
  Database,
  Brain,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileNav } from "@/components/mobile-nav";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-sm border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold">Alan Prayogo</h1>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex space-x-6">
                <a
                  href="#home"
                  className="hover:text-primary transition-colors"
                >
                  Beranda
                </a>
                <a
                  href="#about"
                  className="hover:text-primary transition-colors"
                >
                  Tentang
                </a>
                <a
                  href="#professional"
                  className="hover:text-primary transition-colors"
                >
                  Profesional
                </a>
                <a
                  href="#personal"
                  className="hover:text-primary transition-colors"
                >
                  Personal
                </a>
                <a
                  href="#contact"
                  className="hover:text-primary transition-colors"
                >
                  Kontak
                </a>
              </div>
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              <MobileNav />
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4">
                Halo, Saya Alan Prayogo
                <span className="text-xl md:text-3xl lg:text-4xl block text-primary mt-2">
                  Fullstack Web & Mobile Developer
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0">
                Mahasiswa Teknik Informatika yang berfokus pada pengembangan web
                fullstack dan mobile app. Berpengalaman dengan Laravel,
                CodeIgniter, React, dan Flutter.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="/cv/alanprayogo-cv-2025.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="gap-2">
                    <Download className="w-4 h-4" />
                    Unduh CV
                  </Button>
                </a>
                <a href="#contact">
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 bg-transparent"
                  >
                    <Mail className="w-4 h-4" />
                    Hubungi Saya
                  </Button>
                </a>
              </div>
            </div>
            <div className="flex-1 max-w-sm md:max-w-md lg:max-w-lg">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <Card className="relative">
                  <CardContent className="p-6 md:p-8">
                    <div className="text-center">
                      {/* Profile Photo - Larger on md and lg */}
                      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gradient-to-br from-blue-500 to-purple-600 shadow-xl">
                        <img
                          src="/profile/alan.png"
                          alt="Alan Spacer Profile Photo"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold mb-3">
                        Fullstack Web & Mobile Developer
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-6">
                        Mengembangkan aplikasi web dan mobile dengan teknologi
                        modern
                      </p>
                      <div className="flex justify-center gap-2 flex-wrap">
                        <Badge
                          variant="secondary"
                          className="text-xs md:text-sm"
                        >
                          Laravel
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs md:text-sm"
                        >
                          CodeIgniter
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs md:text-sm"
                        >
                          React
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="text-xs md:text-sm"
                        >
                          Flutter
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tentang Saya
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Saya adalah Founder dari MughniTech, sebuah inisiatif teknologi
              yang terinspirasi dari Asmaul Husna
              <span className="text-primary font-semibold italic">
                {" "}
                Al-Mughni
              </span>{" "}
              —
              <span className="text-sm italic text-gray-500">
                “Yang Maha Memberi Kekayaan”
              </span>
              . MughniTech berfokus pada pengembangan berbagai produk digital
              yang inovatif, inklusif, dan bermanfaat bagi pengguna lintas
              sektor, mulai dari UMKM, atlet, pelajar, hingga perusahaan.
              <span className="underline">
                {" "}
                Saat ini, MughniTech masih berada dalam tahap pengembangan awal
              </span>
              , yang diproyeksikan menjadi ruang berkarya bersama, sekaligus
              membuka lapangan pekerjaan dan program magang bagi talenta muda di
              bidang teknologi dan konten digital
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Background</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Saya adalah mahasiswa semester 8, D4 Teknik Informatika.
                Berfokus pada pengembangan aplikasi web fullstack dan mobile.
                Berpengalaman menggunakan berbagai framework seperti Laravel,
                CodeIgniter, Flutter, serta sedang mendalami React dan teknologi
                MERN stack.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Saya telah mengerjakan beragam proyek, mulai dari landing page,
                LMS, dashboard admin, hingga undangan digital. Dalam bidang
                machine learning, saya menggunakan Python, sementara Java saya
                minati karena arsitekturnya yang sistematis.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Untuk tugas akhir, saya mengembangkan proyek yang menggabungkan
                computer vision dan machine learning dalam aplikasi mobile —
                mencerminkan ketertarikan saya pada teknologi kecerdasan buatan
                (AI) dan potensi integrasinya dalam pengembangan digital.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Keterampilan</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span className="font-medium">Web Development</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Laravel</Badge>
                    <Badge>CodeIgniter</Badge>
                    <Badge>React</Badge>
                    <Badge>Java</Badge>
                    <Badge>PHP</Badge>
                    <Badge>HTML/CSS</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Smartphone className="w-5 h-5 text-primary" />
                    <span className="font-medium">Mobile Development</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Flutter</Badge>
                    <Badge>Dart</Badge>
                    <Badge>Mobile UI/UX</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-5 h-5 text-primary" />
                    <span className="font-medium">Database & Backend</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MySQL</Badge>
                    <Badge>PostgreSQL</Badge>
                    <Badge>API Development</Badge>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Brain className="w-5 h-5 text-primary" />
                    <span className="font-medium">AI & Machine Learning</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Computer Vision</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Python</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Portfolio Section */}
      <section id="professional" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proyek Profesional
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proyek-proyek yang dikerjakan untuk klien, perusahaan, atau dalam
              konteks profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Professional Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <img
                    src="/portfolio/guestbook.png"
                    alt="Guest Book"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo belum tersedia
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/alanprayogo/guestbook"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Sistem Undangan Digital</CardTitle>
                <CardDescription>
                  Aplikasi web yang mempermudah proses pembuatan dan distribusi
                  undangan digital untuk berbagai acara. Platform ini secara
                  otomatis menghasilkan QR Code dari data buku tamu, yang dapat
                  dipindai saat hadir di venue. Dilengkapi fitur statistik
                  kehadiran tamu, pengaturan tema (nama acara, warna,
                  background, dan font), serta modul tambahan seperti souvenir
                  dan gift
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Tailwind CSS</Badge>
                  <Badge variant="outline">QR Code</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Professional Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                  <img
                    src="/portfolio/warehouse.png"
                    alt="Warehouse Management"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo belum tersedia
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/alanprayogo/si-gudang"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>SI Pencatatan Gudang</CardTitle>
                <CardDescription>
                  Sistem Informasi berbasis web untuk pencatatan dan pengelolaan
                  gudang. Mendukung manajemen data master, pergerakan barang
                  masuk-keluar, laporan stok, serta pengaturan hak akses
                  berbasis role pengguna seperti admin, logistik, dan
                  purchasing. Cocok untuk perusahaan yang membutuhkan
                  visibilitas dan efisiensi operasional gudang
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Professional Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <img
                    src="/portfolio/mooc.png"
                    alt="MOOC Universitas Airlangga"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://mooc.unair.ac.id/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/alanprayogo/pl-mooc"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>MOOC Universitas Airlangga</CardTitle>
                <CardDescription>
                  Platform Massive Open Online Course (MOOC) milik Universitas
                  Airlangga dengan sistem pembelajaran daring untuk publik dan
                  mahasiswa internal. Mendukung multi-role (admin, dosen,
                  asisten dosen, dan pengguna), berbagai jenis course
                  (gratis/berbayar), sistem mentoring oleh dosen/praktisi, tugas
                  terstruktur, dan sertifikasi digital sebagai bukti kelulusan
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Laravel</Badge>
                  <Badge variant="outline">MySQL</Badge>
                  <Badge variant="outline">Moodle</Badge>
                  <Badge variant="outline">Payment Gateway</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Portfolio Section */}
      <section id="personal" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proyek Personal
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Proyek-proyek yang dikerjakan untuk pembelajaran dan eksplorasi
              teknologi baru
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Personal Project 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                  <img src="/project/bs.jpg" alt="Bid Snapper" className="" />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <Button size="sm" variant="secondary" className="gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/alanprayogo/bridge_contract_analyzer"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Bid Snapper</CardTitle>
                <CardDescription>
                  Proyek skripsi berupa aplikasi mobile berbasis Flutter, yang
                  mengintegrasikan deteksi objek dengan YOLOv8, sistem bidding
                  berbasis aturan untuk permainan bridge, serta optimasi kontrak
                  menggunakan algoritma NSGA-II untuk membantu pemain pemula
                  memahami skema penawaran secara otomatis dan strategis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Flutter</Badge>
                  <Badge variant="outline">Dart</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">API Integration</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Personal Project 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                  <img
                    src="/project/bidhub.png"
                    alt="BidHub"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo belum tersedia
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/alanprayogo/bridge-hand-detector"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Deteksi Kartu YOLOv8</CardTitle>
                <CardDescription>
                  Proyek pra-skripsi yang fokus pada pembelajaran deteksi kartu
                  bridge menggunakan YOLOv8, mencakup inisiasi project,
                  labeling, training dataset, dan deployment awal. Menjadi
                  fondasi utama dari pengembangan Bid Snapper
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Computer Vision</Badge>
                  <Badge variant="outline">YOLOv8</Badge>
                  <Badge variant="outline">Phyton</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Personal Project 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <div className="relative overflow-hidden rounded-t-lg">
                <div className="w-full h-48 bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <img
                    src="/project/atson.jpg"
                    alt="Atson Group"
                    className="w-full h-full object-fit"
                  />
                </div>
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="text-sm text-muted-foreground flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo belum tersedia
                  </div>

                  <Button
                    asChild
                    size="sm"
                    variant="secondary"
                    className="gap-2"
                  >
                    <a
                      href="https://github.com/alanprayogo/atson-group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Atson Group</CardTitle>
                <CardDescription>
                  Prototipe desain website katalog produk dan dashboard admin
                  untuk kebutuhan praktikum, dengan tampilan yang responsif dan
                  struktur antarmuka sederhana. Proyek ini menekankan penerapan
                  prinsip UI/UX dan manajemen konten berbasis web
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">HTML/CSS</Badge>
                  <Badge variant="outline">Bootstrap</Badge>
                  <Badge variant="outline">Javascript</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Hubungi Saya
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Mari berkolaborasi! Saya terbuka untuk diskusi proyek, peluang
              kerja, atau sekadar berbagi pengalaman
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Bagian Kiri: Kontak */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Mari Terhubung</h3>
              <div className="space-y-2">
                {/* Email */}
                <a
                  href="https://mail.google.com/mail/?view=cm&to=alanbp98@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-muted/40 p-2 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground break-all">
                      alanbp98@gmail.com
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/alanprayogo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 hover:bg-muted/40 p-2 rounded-lg transition-colors"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Github className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">GitHub</p>
                    <p className="text-muted-foreground break-all">
                      https://github.com/alanprayogo
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <div className="flex items-center gap-4 hover:bg-muted/40 p-2 rounded-lg transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">LinkedIn</p>
                    <p className="text-muted-foreground">comingsoon</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bagian Kanan: Form Kontak */}
            <Card>
              <CardHeader>
                <CardTitle>Kirim Pesan</CardTitle>
                <CardDescription>
                  Isi form di bawah ini dan saya akan merespons secepat mungkin
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  action="https://formspree.io/f/xzzvrprp"
                  method="POST"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Nama
                      </label>
                      <Input name="name" placeholder="Nama Anda" required />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="email@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Subjek
                    </label>
                    <Input name="subject" placeholder="Subjek pesan" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Pesan
                    </label>
                    <Textarea
                      name="pesan"
                      placeholder="Tulis pesan Anda di sini..."
                      rows={4}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Kirim Pesan
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2025 Portofolio. Didukung oleh MughniTech
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/alanprayogo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </a>

              {/* <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              ></a> */}
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>

              <a
                href="https://mail.google.com/mail/?view=cm&to=alanbp98@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
