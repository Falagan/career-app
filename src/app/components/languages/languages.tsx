import { LocalRepository } from '../../repositories/local-repository';

export default function Languages() {
  const languages = LocalRepository.getLanguages();
  return (
    <div>
      Languages!
      <ul>
        {languages.map((language) => (
          <li key={language.id}>
            {language.i18n} - {language.level}
          </li>
        ))}
      </ul>
    </div>
  );
}
