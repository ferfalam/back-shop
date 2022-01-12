<form action="{{ route('your_currency.update') }}" method="POST">
    @csrf
    <input type="hidden" name="id" value="{{ $currency->id }}">
    <div class="modal-header">
        <h5 class="modal-title h6">{{ translate('Update Currency') }}</h5>
        <button type="button" class="close" data-dismiss="modal">
        </button>
    </div>
    <div class="modal-body">
        <div class="form-group row">
            <label class="col-sm-2 col-from-label" for="name">{{ translate('Name') }}</label>
            <div class="col-sm-10">
                <input type="text" placeholder="{{ translate('Name') }}" id="name" name="name"
                    value="{{ $currency->name }}" class="form-control" required>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-from-label" for="symbol">{{ translate('Symbol') }}</label>
            <div class="col-sm-10">
                <input type="text" placeholder="{{ translate('Symbol') }}" id="symbol" name="symbol"
                    value="{{ $currency->symbol }}" class="form-control" required>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-from-label" for="code">{{ translate('Code') }}</label>
            <div class="col-sm-10">
                <input type="text" placeholder="{{ translate('Code') }}" id="code" name="code"
                    value="{{ $currency->code }}" class="form-control" required>
            </div>
        </div>
        <div class="form-group row">
            <label class="col-sm-2 col-from-label" for="exchange_rate">{{ translate('Exchange Rate') }}</label>
            <div class="col-sm-10">
                <input type="number" step="0.01" min="0" placeholder="{{ translate('Exchange Rate') }}"
                    id="exchange_rate" name="exchange_rate" value="{{ $currency->exchange_rate }}"
                    class="form-control" required>
            </div>
        </div>
    </div>
    <div class="modal-footer">
        <button type="submit" class="btn btn-sm btn-primary">{{ translate('Save') }}</button>
        <button type="button" class="btn btn-sm btn-light" data-dismiss="modal">{{ translate('Cancel') }}</button>
    </div>
</form>
