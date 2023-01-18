import { SourceClass, SourceItem } from '../../../types/types';
import './sources.css';

class Sources implements SourceClass {
    draw(data: SourceItem[]): void {
        const fragment = <DocumentFragment>document.createDocumentFragment();
        const sourceItemTemp = <HTMLTemplateElement>document.querySelector('#sourceItemTemp');

        data.forEach((item) => {
            const sourceClone = <HTMLTemplateElement>sourceItemTemp.content.cloneNode(true);

            (<HTMLTemplateElement>sourceClone.querySelector('.source__item-name')).textContent = item.name;
            (<HTMLTemplateElement>sourceClone.querySelector('.source__item')).setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        (<HTMLTemplateElement>document.querySelector('.sources')).append(fragment);
    }
}

export default Sources;
