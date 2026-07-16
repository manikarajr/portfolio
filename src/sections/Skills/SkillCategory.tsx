import { Cloud, Database, Layout, Server, Sparkles, Terminal, Workflow, type LucideIcon } from "lucide-react";
import { TechChip } from "../../components/common/TechChip";
import { Card } from "../../components/ui/Card";
import type { SkillCategory as SkillCategoryType, SkillCategoryName } from "../../types/portfolio";

const CATEGORY_ICONS: Record<SkillCategoryName, LucideIcon> = {
  Frontend: Layout,
  Backend: Server,
  Languages: Terminal,
  Databases: Database,
  "Cloud & DevOps": Cloud,
  "AI & Tools": Sparkles,
  Methodology: Workflow,
};

interface SkillCategoryProps {
  category: SkillCategoryType;
}

export function SkillCategory({ category }: SkillCategoryProps) {
  const CategoryIcon = CATEGORY_ICONS[category.name];

  return (
    <Card hoverable className="flex h-full flex-col">
      <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-brand-600 dark:text-brand-400">
        <CategoryIcon className="h-4 w-4 shrink-0" aria-hidden="true" />
        {category.name}
      </h3>
      <ul className="mt-4 flex flex-1 flex-wrap content-start items-start gap-2">
        {category.skills.map((skill) => (
          <li key={skill.name}>
            <TechChip name={skill.name} variant="pill" colored />
          </li>
        ))}
      </ul>
    </Card>
  );
}
