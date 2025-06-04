import { skills } from "@/data/skills";
import { Wrench, Code, Server, FlaskConical } from "lucide-react";
import {JSX} from "react";
import { Languages } from "lucide-react";

const icons: Record<string, JSX.Element> = {
    Languages: <Languages className="w-4 h-4 text-orange-500" />,
    Frontend: <Code className="w-4 h-4 text-blue-500" />,
    Backend: <Server className="w-4 h-4 text-green-500" />,
    "Tools & DevOps": <Wrench className="w-4 h-4 text-yellow-500" />,
    Testing: <FlaskConical className="w-4 h-4 text-purple-500" />,
};


export default function Skills() {
    return (
        <section className="mt-10 max-w-4xl w-full">
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {skills.map((group, index) => (
                    <div key={index} className="bg-muted rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-2 mb-3">
                            {icons[group.category]}
                            <h3 className="text-lg font-medium">{group.category}</h3>
                        </div>
                        <div className="flex flex-wrap gap-2 text-sm">
                            {group.items.map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="bg-black/5 dark:bg-white/10 rounded-full px-3 py-1"
                                >
                  {skill}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
