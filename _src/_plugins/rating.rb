require 'date'

module Jekyll
  class RatingTag < Liquid::Tag

    def initialize(tag_name, text, tokens)
      super
      date, rating = text.split(' ', 2)
      @rating = rating.to_i
      @creation_date = Date.strptime(date, '%Y-%m-%d')
    end

    def visitors_count(days)
      res = 0
      (1..days).each do |day|
        res = res + 14/day.to_f + (day % @rating == 0 ? 1 : 0)
      end
      res.to_i
    end

    def render(context)
      count = visitors_count((Date.today - @creation_date).to_i)
      "<span itemprop='ratingValue'>#{Random.rand(100)/100.0+4}</span>/<span itemprop='reviewCount'>#{count}</span>"
    end
  end
end

Liquid::Template.register_tag('rating', Jekyll::RatingTag)
