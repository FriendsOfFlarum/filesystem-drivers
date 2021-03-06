import app from 'flarum/app';
import Modal from 'flarum/components/Modal';

export default class RequiredPackageModal extends Modal {
    init() {
        super.init();

        this.adapter = this.props.adapter;
    }
    title() {
        return app.translator.trans('fof-filesystem.admin.required-package-modal.title', {adapter: this.adapter});
    }
    content() {
        const dependency = app.translator.trans('fof-filesystem.admin.you-need-for.' + this.adapter);

        return <div className="Modal-body">
            {app.translator.trans('fof-filesystem.admin.required-package-modal.content', {package: dependency})}
        </div>;
    }
}
