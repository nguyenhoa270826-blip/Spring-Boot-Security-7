import React, { useState } from 'react';
import JSZip from 'jszip';
import { 
  Download, Copy, Check, Folder, FileCode, FolderTree, 
  Database, Mail, Shield, CheckCircle2, ChevronRight, Terminal, BookOpen, Layers
} from 'lucide-react';
import { PROJECT_FILES, ProjectFile, PROJECT_NAME } from './projectFiles';

export default function App() {
  const [selectedFile, setSelectedFile] = useState<ProjectFile>(PROJECT_FILES[0]);
  const [copied, setCopied] = useState(false);
  const [isZipping, setIsZipping] = useState(false);
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [searchFilter, setSearchFilter] = useState('');

  // 1-Click ZIP Download for Spring Tool Suite (STS)
  const handleDownloadZip = async () => {
    try {
      setIsZipping(true);
      const zip = new JSZip();
      const rootFolder = zip.folder(PROJECT_NAME) || zip;

      // Thêm toàn bộ các file theo cây thư mục chuẩn Maven
      PROJECT_FILES.forEach(file => {
        rootFolder.file(file.path, file.content);
      });

      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `${PROJECT_NAME}.zip`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Lỗi khi nén file zip:", err);
    } finally {
      setIsZipping(false);
    }
  };

  // Copy code của file đang chọn
  const handleCopyCode = () => {
    if (!selectedFile) return;
    navigator.clipboard.writeText(selectedFile.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Tải riêng file đang chọn
  const handleDownloadSingle = () => {
    if (!selectedFile) return;
    const blob = new Blob([selectedFile.content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    const filename = selectedFile.path.split('/').pop() || "file.txt";
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const filteredFiles = PROJECT_FILES.filter(f => {
    const matchCat = filterCategory === 'all' || f.category === filterCategory;
    const matchSearch = f.path.toLowerCase().includes(searchFilter.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Top Header */}
      <header className="border-b border-slate-800 bg-slate-900/90 backdrop-blur sticky top-0 z-50 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-lg shadow-cyan-500/20">
            STS
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-base font-bold text-white tracking-tight">
                Maven Project Spring Boot 4 + Security 7 (vn.iotstar)
              </h1>
              <span className="text-[11px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">
                Ví dụ 1, 2, 3 Hoàn Chỉnh
              </span>
            </div>
            <p className="text-xs text-slate-400 flex items-center gap-2">
              <span>SQL Server (sa / 123456)</span>
              <span>•</span>
              <span>Tomcat 11 + JDK 26</span>
              <span>•</span>
              <span className="text-cyan-400">nguyenhoa270826@gmail.com</span>
            </p>
          </div>
        </div>

        {/* 1-Click Action Buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadZip}
            disabled={isZipping}
            className="flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-lg shadow-emerald-600/20 transition-all active:scale-95 cursor-pointer disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isZipping ? 'Đang đóng gói ZIP...' : 'TẢI TOÀN BỘ PROJECT (.ZIP MỞ TRONG STS)'}
          </button>
        </div>
      </header>

      {/* Thông tin đáp ứng 3 ví dụ */}
      <div className="bg-slate-900 border-b border-slate-800 px-6 py-2.5 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Ví dụ 1: Login Security 7 + MapStruct + Thymeleaf
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Ví dụ 2: Login Username / Email + Header Avatar & Họ tên
          </span>
          <span className="flex items-center gap-1.5 text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" /> Ví dụ 3: OTP Mail, CRUD User/Product, Cloudinary, Phân trang
          </span>
        </div>
        <div className="text-slate-400">
          Tổng số: <b className="text-cyan-400">{PROJECT_FILES.length}</b> files chuẩn Maven
        </div>
      </div>

      {/* Main Workspace: Left File Explorer + Right Code Viewer */}
      <div className="flex-1 flex overflow-hidden">
        {/* LEFT SIDEBAR: File Tree */}
        <aside className="w-80 border-r border-slate-800 bg-slate-900/60 flex flex-col shrink-0">
          <div className="p-3 border-b border-slate-800 space-y-2">
            <input
              type="text"
              placeholder="Tìm kiếm file..."
              value={searchFilter}
              onChange={(e) => setSearchFilter(e.target.value)}
              className="w-full bg-slate-950 border border-slate-700/80 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-500"
            />

            <div className="flex gap-1 overflow-x-auto pb-1 text-[11px]">
              {['all', 'config', 'entity', 'dto', 'service', 'controller', 'template'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={`px-2 py-0.5 rounded capitalize whitespace-nowrap cursor-pointer ${
                    filterCategory === cat ? 'bg-blue-600 text-white font-medium' : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-2 space-y-0.5 text-xs font-mono">
            {filteredFiles.map((file) => {
              const isSelected = selectedFile?.path === file.path;
              const fileName = file.path.split('/').pop();
              const dirName = file.path.substring(0, file.path.lastIndexOf('/'));

              return (
                <button
                  key={file.path}
                  onClick={() => setSelectedFile(file)}
                  className={`w-full text-left px-2.5 py-1.5 rounded-lg flex items-center gap-2 transition cursor-pointer ${
                    isSelected 
                      ? 'bg-blue-600/30 text-blue-200 border border-blue-500/40 font-semibold' 
                      : 'text-slate-400 hover:bg-slate-800/80 hover:text-slate-200'
                  }`}
                >
                  <FileCode className={`w-3.5 h-3.5 shrink-0 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                  <div className="truncate flex-1">
                    <span className="text-slate-100">{fileName}</span>
                    <span className="block text-[10px] text-slate-500 truncate">{dirName || 'root'}</span>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="p-3 border-t border-slate-800 bg-slate-950/40 text-[11px] text-slate-400 flex items-center justify-between">
            <span>Import vào STS:</span>
            <span className="font-mono text-cyan-400">Existing Maven Projects</span>
          </div>
        </aside>

        {/* RIGHT AREA: Code Viewer */}
        <section className="flex-1 flex flex-col bg-slate-950 overflow-hidden">
          {/* File bar */}
          <div className="border-b border-slate-800 px-6 py-2.5 bg-slate-900/40 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2 overflow-hidden">
              <span className="text-slate-400 text-xs font-mono">springboot-iotstar/</span>
              <span className="text-cyan-300 text-xs font-mono font-bold truncate">
                {selectedFile?.path}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                {copied ? 'Đã sao chép!' : 'Sao chép file này'}
              </button>

              <button
                onClick={handleDownloadSingle}
                className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium transition cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Tải file
              </button>
            </div>
          </div>

          {/* Code content */}
          <div className="flex-1 overflow-auto p-6 font-mono text-xs leading-relaxed text-slate-300 selection:bg-blue-600/40">
            <pre className="whitespace-pre">
              <code>{selectedFile?.content}</code>
            </pre>
          </div>
        </section>
      </div>

      {/* Bottom STS Quick Guide */}
      <footer className="border-t border-slate-800 bg-slate-900/90 px-6 py-3 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex items-center gap-3 text-slate-400">
          <BookOpen className="w-4 h-4 text-cyan-400" />
          <span><b>Cách mở trong Spring Tool Suite (STS):</b> Bấm nút màu xanh <b>TẢI TOÀN BỘ PROJECT (.ZIP)</b> &gt; Giải nén &gt; Mở STS chọn <b>File &gt; Import &gt; Maven &gt; Existing Maven Projects</b> &gt; Nhấn Finish!</span>
        </div>
        <div className="flex items-center gap-4 text-slate-400 font-mono text-[11px]">
          <span>DB: <b>webst_db</b></span>
          <span>User: <b>sa</b> / <b>123456</b></span>
          <span>Default: <b>admin / 123456</b> & <b>user01 / 123456</b></span>
        </div>
      </footer>
    </div>
  );
}
