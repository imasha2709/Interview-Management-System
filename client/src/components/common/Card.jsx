const Card = ({ children, className = "", title, subtitle }) => {
  return (
    <div
      className={`bg-amber-50/80 backdrop-blur-sm rounded-xl p-4 sm:p-6 shadow-sm border border-amber-100 ${className}`}
    >
      {title && (
        <div className="mb-3 sm:mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-amber-900 italic">
            {title}
          </h3>
          {subtitle && (
            <p className="text-sm text-amber-700 mt-1">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;
