import { formatFiles, Tree } from '@nrwl/devkit';
import { updateJson } from '@nrwl/devkit';

export default async function (tree: Tree) {
  updateJson(tree, 'nx.json', (json) => {
    json.defaultProject = 'store';
    return json;
  });
  await formatFiles(tree);
}
