export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 font-bold text-lg">
              ⚡
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">Battery-EC</span>
              <span className="text-xs ml-2 px-2 py-0.5 rounded bg-emerald-950 border border-emerald-800 text-emerald-400 font-mono">
                Next.js 16 + React 19
              </span>
            </div>
          </div>
          <nav className="flex items-center gap-6 text-sm text-slate-400 font-medium">
            <span className="text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Backend API: Ready (:5000)
            </span>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 max-w-7xl mx-auto px-6 py-12 w-full">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Hệ Thống Quản Lý Pin & Dịch Vụ Kỹ Thuật
          </h1>
          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Nền tảng thương mại điện tử đa kênh, quầy thu ngân POS bán lẻ, xưởng đóng pack pin Lithium theo định mức BOM & trung tâm sửa chữa/bảo hành.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: POS */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-2xl mb-4">
              🏪
            </div>
            <h3 className="text-lg font-bold text-white mb-2">POS Bán Lẻ Quầy</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Tích hợp máy quét mã vạch USB/Bluetooth, phím tắt tốc độ cao (F2, F4, F9) và in hóa đơn K80 trừ kho tức thì.
            </p>
            <span className="text-xs text-blue-400 font-medium">Auto-link SĐT khách hàng &rarr;</span>
          </div>

          {/* Card 2: BOM Assembly */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-2xl mb-4">
              🔋
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Xưởng Đóng Pin BOM</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Định mức vật tư linh kiện (Cell 18650, 21700, BMS Daly). Lắp ráp nguyên tử trừ kho linh kiện và tăng kho thành phẩm.
            </p>
            <span className="text-xs text-emerald-400 font-medium">Tính giá vốn tự động &rarr;</span>
          </div>

          {/* Card 3: Repairs & Warranty */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-2xl mb-4">
              🔧
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Sửa Chữa & Bảo Hành</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Tra cứu bảo hành snapshot bất biến theo SĐT/Mã đơn. Tiếp nhận pin hỏng, xuất linh kiện thay thế và bảo hành lần 2.
            </p>
            <span className="text-xs text-amber-400 font-medium">vw_WarrantyLookup &rarr;</span>
          </div>

          {/* Card 4: Inventory & Finance */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition duration-200">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-2xl mb-4">
              📊
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Kho 2 Tầng & Báo Cáo</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Quản lý tồn kho thực tế (QuantityOnHand) vs tạm giữ (QuantityReserved). Đối soát thẻ kho tự động và tính lãi gộp trừ COGS.
            </p>
            <span className="text-xs text-purple-400 font-medium">Độ lệch kho: 0% tuyệt đối &rarr;</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-6 text-center text-xs text-slate-500">
        Battery-EC &bull; Nền tảng E-Commerce, POS & Xưởng Đóng Pin Lithium
      </footer>
    </div>
  );
}
