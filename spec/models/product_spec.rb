require 'rails_helper'
#generated with `bin/rails g rspec:model product` on terminal
#run bin/rspec to test

RSpec.describe Product, type: :model do
  let(:category) {Category.new(:name => 'Toys')}
  subject {described_class.new(:name => 'Pokemon', :price => 300, :quantity => 30, :category => category)}  
  
  describe 'Validations' do  
    it 'Checks name, quantity and price are saved and in the same category' do
      subject.valid?
      expect(subject.errors).to be_empty
      assc = described_class.reflect_on_association(:category)
      expect(assc.macro).to eq :belongs_to
    end

    it 'unable to save when name is empty' do
      subject.name = nil
      subject.valid?
      expect(subject.errors).not_to be_empty
    end
    
    it 'unable to save when price is empty' do
      subject.price_cents = nil
      subject.valid?
      expect(subject.errors).not_to be_empty
    end

    it 'unable to save when quantity is empty' do
      subject.quantity = nil
      subject.valid?
      expect(subject.errors).not_to be_empty
    end

    it 'unable to save when category is empty' do
      subject.category = nil
      subject.valid?
      expect(subject.errors).not_to be_empty
    end
  end  
end