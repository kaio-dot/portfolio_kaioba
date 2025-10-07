function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-10">
      {/* Título principal */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
        {title}
      </h2>

      {/* Subtítulo opcional */}
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}

      {/* Linha decorativa */}
      <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full" />
    </div>
  );
}

export default SectionTitle;
