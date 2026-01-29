import { Tag } from "lucide-react";
import type { RuleDef } from "sanity";
import { defineLocalizedString, defineOrderedDocument } from "../definitions";

export const PortfolioTag = defineOrderedDocument({
    title: "Tagi dla Portfolio",
    name: "portfolioTag",
    icon: Tag,
    fields: [
        defineLocalizedString({
            name: "title",
            title: "Nazwa Taga",
            validation: <T>(rule: RuleDef<T>) =>
                rule.custom(async (value: any, context) => {
                    if (!value) return true;

                    const client = context.getClient({
                        apiVersion: "2023-01-01",
                    });
                    const currentDocId = context.document?._id?.replace(
                        "drafts.",
                        ""
                    );

                    // Check for Polish title duplicates
                    if (value.pl) {
                        const plQuery = `count(*[_type == "portfolioTag" && title.pl == $title && !(_id in [$id, $draftId])]) > 0`;
                        const plExists = await client.fetch(plQuery, {
                            title: value.pl,
                            id: currentDocId,
                            draftId: `drafts.${currentDocId}`,
                        });

                        if (plExists) {
                            return "Tag z taką nazwą (PL) już istnieje";
                        }
                    }

                    // Check for English title duplicates
                    if (value.en) {
                        const enQuery = `count(*[_type == "portfolioTag" && title.en == $title && !(_id in [$id, $draftId])]) > 0`;
                        const enExists = await client.fetch(enQuery, {
                            title: value.en,
                            id: currentDocId,
                            draftId: `drafts.${currentDocId}`,
                        });

                        if (enExists) {
                            return "Tag z taką nazwą (EN) już istnieje";
                        }
                    }

                    return true;
                }),
        }),
    ],
});
