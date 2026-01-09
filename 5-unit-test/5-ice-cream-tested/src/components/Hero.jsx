const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-soft to-background-light dark:from-background-dark dark:to-card-dark pt-10 pb-20 lg:pt-20 lg:pb-32">
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
        <div className="absolute -left-20 top-20 size-[500px] rounded-full bg-primary/5 blur-[100px] animate-pulse"></div>
        <div className="absolute -right-20 bottom-0 size-[500px] rounded-full bg-blue-400/5 blur-[100px]"></div>
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col items-start gap-8 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-sm border border-primary/10 dark:bg-white/5 dark:text-pink-300 dark:border-white/10 transition-transform hover:scale-105 cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Yaz Özel
            </div>
            <h2 className="text-5xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-6xl lg:text-7xl text-balance">
              Mutluluk Veren{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">
                Kaşıklar
              </span>
              ,<br /> Kapınızda.
            </h2>
            <p className="text-xl leading-relaxed text-text-muted dark:text-slate-300 text-balance font-medium">
              Premium aromalar, el yapımı külahlar ve sıfır pişmanlık. En sevdiğiniz dondurmaları sipariş edin, 30
              dakika içinde kapınıza taptaze gelsin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="group flex items-center justify-center gap-2 rounded-2xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-glow transition-all hover:bg-primary-dark hover:-translate-y-1 active:translate-y-0.5 active:shadow-none">
                Siparişe Başla
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </button>
              <button className="flex items-center justify-center gap-2 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-slate-700 shadow-sm border border-slate-200 transition-all hover:bg-slate-50 hover:border-slate-300 hover:text-slate-900 active:bg-slate-100 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10">
                Menüyü Gör
              </button>
            </div>
            <div className="flex items-center gap-4 mt-2">
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  alt="Kullanıcı avatarı"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-background-dark object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLfaZVcLBUyr4L2e5HCFfW2RIbF9szhqSheujRFuYajFSZEt8mkWEWAAYK0bnNG6ZgtCfWE0_wZdyeWGro21mHcW17-H7qMr6UEJwVTuDa5-bIEBJqanoLusPwJRJYWfPT4vdbSjYzWghNgeWPCC9p9uDKJagmd11ipZmRllHGCfaP2gh2-pVTh4zUsKhOy2QD9yNUlY52ZoNOk3XTQb_8I8YRXCeImq2mCTtb_hjWm7oWtEY0o3gXMFaNaeSxDHYMLPf5zJxW24fT"
                />
                <img
                  alt="Kullanıcı avatarı"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-background-dark object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_Jsi3Lu4IaCKNpOKMS-FEojISDz8EYfmPD8Dcd_VJ1WIi9IJaTRwTwYDph0q2_KOsElUsPOpWIMHlHKrpYC-_FAJGFh_cTrgbzk8CYB5HA8FM23FbLeCOS78nShu-ob8VDyb-V4FZogU8JTjCooPAaOs86yTqOnfHS8XS-S-zB2ow28YLnw6iQhpXk_SbK8NIqjxZnHHA2moEPb_o-RBPQMLJy0rMumdDVjHuCEYA3VCiitQfKix2SCjBf-RdBo3wtg7VXl99ieq"
                />
                <img
                  alt="Kullanıcı avatarı"
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-background-dark object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAook4NwbDjhSs3nyyu_-1x9P_0qFjFhDer3h7VCEq3p-aqjx_Wr37ujXEH9FIc_Ah16oj4CcfP1t6_3KbylucbTXC2vlmJ1AdqdlhPwu_RscCmXV3VYV1VM332guZ6yubHXQOAFnJ75G4o6dlFkpWi2e6xcSPT3fHJ1dDHiFQSX0FchJKkL5wz5fi3dJeVrU7Tk41nKfclsDU_eKgmPp-M17pnvIYS99YtHN5777R5XQL2I0YBodUBo8Dpqz-0KCV0NfIvq1uiyDDR"
                />
              </div>
              <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
                <span className="text-slate-900 dark:text-white font-bold">5.000+</span> mutlu gurmeye katılın
              </p>
            </div>
          </div>
          <div className="relative lg:block perspective-1000">
            <div
              className="relative mx-auto aspect-square max-w-lg overflow-hidden rounded-[3rem] bg-linear-to-br from-white to-pink-50 shadow-2xl ring-1 ring-black/5 dark:from-white/5 dark:to-white/10 dark:ring-white/10 rotate-2 hover:rotate-0 transition-transform duration-700 ease-out"
              data-alt="Nane garnitürlü bir kasede lezzetli çilekli dondurma toplarının yakın çekimi"
            >
              <div
                className="absolute inset-0 bg-cover bg-center scale-105 hover:scale-100 transition-transform duration-700"
                style={{
                  backgroundImage: "url('/hero-1.jpg')",
                }}
              ></div>
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl">
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wider opacity-80">Öne Çıkan</p>
                      <p className="text-lg font-bold">Çilekli Nane Esintisi</p>
                    </div>
                    <div className="bg-white text-primary font-bold px-3 py-1 rounded-lg text-sm">₺164.90</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-yellow-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
            <div className="absolute -left-4 -top-4 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
